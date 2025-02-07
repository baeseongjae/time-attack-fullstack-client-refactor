"use client";

import DealCardsList from "@/components/DealCardsList";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import { useRequireLogIn } from "@/hooks/useRequireLogIn";
import useQueryMyInterestedDeals from "@/react-query/my/useQueryMyInterestedDeals";
import useQueryMyInterests from "@/react-query/my/useQueryMyInterests";
import { useMemo } from "react";
import PopularDeals from "./_components/PopularDeals";

function MyInterestsPage() {
  const { data: myInterests, isLoading } = useQueryMyInterests(); // 내 관심 판매글 데이터 불러오기.
  const dealIds = useMemo(() => {
    return myInterests?.map((interest) => interest.dealId) || [];
  }, [myInterests]);
  const { data: myInterestedDeals, isLoading: isDealsLoading } =
    useQueryMyInterestedDeals(dealIds);

  useRequireLogIn();

  return (
    <Page>
      {isDealsLoading ? (
        <p>로딩중...</p>
      ) : (
        <>
          <section>
            <Heading>내 관심 판매글</Heading>
            {myInterestedDeals?.length ? (
              <DealCardsList deals={myInterestedDeals} />
            ) : (
              <p className="flex flex-col ">
                관심 판매글이 없습니다.
                <p>하트버튼을 눌러 관심을 표현해보세요!</p>
              </p>
            )}
          </section>
          <section className="pt-20">
            <Heading>인기 판매글</Heading>
            <PopularDeals />
          </section>
        </>
      )}
    </Page>
  );
}

export default MyInterestsPage;

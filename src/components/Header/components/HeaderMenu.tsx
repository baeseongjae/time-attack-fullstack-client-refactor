"use client";

import LogInModal from "@/app/(providers)/(root)/auth/_components/LogInModal";
import { useAuth, useModal } from "@/contexts";
import Link from "next/link";
import { toast } from "react-toastify";

function HeaderMenu() {
  const { isLoggedIn } = useAuth();
  const { open } = useModal();

  const handleClickServiceNeedLogIn = (path?: string) => {
    if (!isLoggedIn) {
      toast.info("로그인이 필요한 서비스입니다.");
      open(<LogInModal pathToGo={path} />);
    }
  };

  return (
    <nav className="xs:ml-12 ml-5 hidden md:block ">
      <ul className="flex items-center">
        <li>
          <Link
            href="/"
            className="hover:bg-primary-100 hover:text-white px-3 py-2 rounded-lg outline-primary-100"
          >
            둘러보기
          </Link>
        </li>
        <li>
          <Link
            href={isLoggedIn ? "/deals/create" : ""}
            onClick={() => {
              handleClickServiceNeedLogIn("/deals/create");
            }}
            className="hover:bg-primary-100 hover:text-white px-3 py-2 rounded-lg outline-primary-100"
          >
            판매하기
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            className="hover:bg-primary-100 hover:text-white px-3 py-2 rounded-lg outline-primary-100"
          >
            채팅하기
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderMenu;

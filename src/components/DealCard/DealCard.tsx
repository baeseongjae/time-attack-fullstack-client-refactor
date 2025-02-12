import { Deal } from "@/types/Deal.type";
import formatPrice from "@/utils/formatPrice.util";
import { useTimeDiff } from "@/utils/useTimeDiff";
import Image from "next/image";
import Link from "next/link";
import { GiBearFace } from "react-icons/gi";
import InterestAndViews from "./InterestAndViews";

interface DealCardProps {
  deal: Deal;
}

function DealCard({ deal }: DealCardProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || "";
  const imageUrl = `${baseUrl}${deal.imgSrc}`;

  return (
    <Link href={`/deals/${deal.id}`} className="relative">
      <div className="w-full h-72 relative bg-primary-100/80 rounded-3xl border border-neutral-300 shadow-xl overflow-hidden hover:scale-110 duration-500 flex justify-center">
        {deal.imgSrc ? (
          <Image
            src={imageUrl}
            fill
            style={{ objectFit: "cover" }}
            alt={deal.title}
          />
        ) : (
          <div className="absolute top-[20px] gap-x-1 flex items-center justify-center text-white">
            <span className="text-4xl">
              <GiBearFace />
            </span>
            <span className="text-md">현재 등록된 이미지가 없습니다.</span>
          </div>
        )}
      </div>
      <div>
        <h6 className="pt-4 text-lg font-bold truncate">{deal.title}</h6>
        <p className="text-xs text-neutral-400">
          {useTimeDiff(deal.createdAt)}
        </p>
        <p className="text-lg font-bold pb-2 text-primary-100">
          {formatPrice(deal.price)}
        </p>
        <p>{deal.location}</p>
        <InterestAndViews
          views={deal.views}
          interest={deal.interest}
          dealId={deal.id}
          authorEmail={deal.authorEmail}
        />
      </div>
    </Link>
  );
}

export default DealCard;

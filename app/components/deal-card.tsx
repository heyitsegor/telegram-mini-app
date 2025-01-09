import Image from "next/image";
import React from "react";

type DealCardProps = {
  deal: { image: string; title: string; description: string };
};

const DealCard = ({ deal }: DealCardProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="relative w-full h-[470px] overflow-hidden rounded-2xl rounded-bl-none">
        <Image src={deal.image} alt={deal.title} width={343} height={470} />
        <svg
          width="300"
          height="171"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0"
        >
          <path
            d="M0 .173828V30.1738h30c-16.5685 0-30-13.4314-30-29.999972ZM300 60.1738c0-16.5685-13.431-30-30-30H0V171.174h133.887c14.819 0 26.833-12.014 26.833-26.834 0-14.819 12.014-26.833 26.833-26.833H270c16.569 0 30-13.431 30-29.9999V60.1738Z"
            fill="#fff"
          />
        </svg>
        <span className="absolute top-[350px] text-[26px] font-black max-w-[300px] leading-none uppercase italic">
          {deal.title}
        </span>
        <span className="absolute bottom-1 text-sm w-[160px] text-pretty leading-[120%]">
          {deal.description}
        </span>
      </div>
    </div>
  );
};

export default DealCard;

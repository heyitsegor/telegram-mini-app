import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import React from "react";
import PromoCountdown from "./promo-countdown";

const PromoDeal = () => {
  return (
    <div className="mb-10 pb-[166px] relative">
      <div className="p-6 pb-[400px] text-white bg-blue rounded-2xl">
        <div className="flex flex-col gap-3">
          <h2 className="italic font-black text-[31px] leading-none">
            ЭНЕРГИЯ <br /> ДЛЯ ТВОИХ
            <br /> ПОБЕД
          </h2>
          <div className="flex flex-col text-sm leading-none">
            <span>Безлимит</span>
            <span className="font-black text-[52px] italic text-yellow">
              ОТ 1990₽
            </span>
            <span>в месяц</span>
          </div>
        </div>
      </div>
      <Image
        src="/promo-image-1.png"
        width={690}
        height={629}
        alt="promo"
        className="absolute top-[268px] left-0"
      />
      <Image
        src="/promo-image-2.png"
        width={996.14}
        height={395.76}
        alt="promo"
        className="absolute top-[219px] left-0  mix-blend-screen"
      />
      <div className="absolute right-0 w-fit top-[210px]">
        <div className="relative w-[273px] h-[145px]">
          <svg
            className="absolute top-0 right-0"
            viewBox="0 0 273 145"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M273 144.65v-30h-30c16.569 0 30 13.431 30 30z"
              fill="#fff"
            />
            <path
              d="M-.00000262 84.654c.00000145 16.568 13.432 30 30 30h243v-84h-243c-16.568 0-30 13.432-30 30l.0000021 24zM273 .65381v30h-30c16.569 0 30-13.431 30-30z"
              fill="#fff"
            />
          </svg>
          <div className="absolute -translate-y-1/2 top-1/2 w-[243px] right-0 flex gap-3">
            <p className="text-[11px]">
              До конца
              <br />
              акции осталось
            </p>
            <PromoCountdown />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-4 p-4 bg-white rounded-xl shadow-base">
        <div className="flex flex-col gap-2">
          <div className="leading-[130%] text-balance">
            Приведи друга и получите 2 абонемента на месяц
          </div>
          <div className="text-[24px] font-black italic leading-none">
            ЗА 1990₽
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            className="w-full text-xs leading-none"
            variant="yellow"
            size="lg"
          >
            Записаться
          </Button>
          <Button
            className="w-full text-xs leading-none"
            variant="background"
            size="lg"
          >
            Подробнее
          </Button>
        </div>
        <div className="flex gap-2">
          <Checkbox />
          <span className="text-xs font-bold leading-none">
            Даю согласие на обработку моих персональных данных
          </span>
        </div>
      </div>
    </div>
  );
};

export default PromoDeal;

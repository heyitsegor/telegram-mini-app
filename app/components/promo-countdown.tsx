import React, { useState, useEffect } from "react";
const PromoCountdown = () => {
  const [days, setDays] = useState(3);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      } else if (days > 0) {
        setDays(days - 1);
        setHours(23);
        setMinutes(59);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [days, hours, minutes, seconds]);

  const padNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="flex items-center">
      <span className="flex rounded-sm flex-col items-center justify-center px-2 pt-[10px] pb-1 shadow-base">
        <span className="text-[13px] italic font-black leading-none">
          {padNumber(days)}
        </span>
        <span className="text-[6px] text-grayLight">дней</span>
      </span>
      <span className="mx-[1px] text-grayLight">
        <svg
          width="4"
          height="10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity=".1" fill="#302F2F">
            <path d="M1.45294 9.06444V6.87179h1.6421v2.19265h-1.6421ZM1.45294 3.04656V.853912h1.6421V3.04656h-1.6421Z" />
          </g>
        </svg>
      </span>
      <span className="flex rounded-sm flex-col items-center justify-center px-2 pt-[10px] pb-1 shadow-base">
        <span className="text-[13px] italic font-black leading-none">
          {padNumber(hours)}
        </span>
        <span className="text-[6px] text-grayLight">часов</span>
      </span>
      <span className="mx-[1px] text-grayLight">
        <svg
          width="4"
          height="10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity=".1" fill="#302F2F">
            <path d="M1.45294 9.06444V6.87179h1.6421v2.19265h-1.6421ZM1.45294 3.04656V.853912h1.6421V3.04656h-1.6421Z" />
          </g>
        </svg>
      </span>
      <span className="flex rounded-sm flex-col items-center justify-center px-2 pt-[10px] pb-1 shadow-base">
        <span className="text-[13px] italic font-black leading-none">
          {padNumber(minutes)}
        </span>
        <span className="text-[6px] text-grayLight">минут</span>
      </span>
      <span className="mx-[1px] text-grayLight">
        <svg
          width="4"
          height="10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity=".1" fill="#302F2F">
            <path d="M1.45294 9.06444V6.87179h1.6421v2.19265h-1.6421ZM1.45294 3.04656V.853912h1.6421V3.04656h-1.6421Z" />
          </g>
        </svg>
      </span>
      <span className="flex rounded-sm flex-col items-center justify-center px-2 pt-[10px] pb-1 shadow-base">
        <span className="text-[13px] italic font-black leading-none">
          {padNumber(seconds)}
        </span>
        <span className="text-[6px] text-grayLight">секунд</span>
      </span>
    </div>
  );
};

export default PromoCountdown;

import Barcode from "@/components/shared/barcode";
import CalendarIcon from "@/components/shared/calendar-icon";
import LightningIcon from "@/components/shared/lightning-icon";
import LocationIcon from "@/components/shared/location-icon";
import { Button } from "@/components/ui/button";

import React from "react";

const UserSection = () => {
  return (
    <div className="mt-3 grid grid-cols-2 gap-2">
      <div className="col-span-2 p-4 rounded-xl bg-background flex flex-col gap-3 font-bold text-sm leading-none">
        <div className="flex justify-between items-center">
          <span>Кирилл Панфилов</span>
          <span className="flex gap-2 items-center text-grayDark">
            <LightningIcon /> 2/10
          </span>
        </div>
        <Barcode />
        <div className="flex justify-between items-center">
          <span className="flex gap-2 items-center text-pink text-base font-black italic">
            <LocationIcon />
            GS Алые паруса
          </span>
          <span className="text-grayDark">6:00 – 23:00</span>
        </div>
      </div>
      <div className="flex flex-col justify-between p-4 bg-background rounded-xl h-[132px]">
        <CalendarIcon />
        <div className="pl-[6px] border-l border-grayLight flex flex-col">
          <span className="font-semibold text-xs">
            <span className="text-grayLight">Пн </span>08:00-11:00
          </span>
          <span className="font-bold text-xs">Здоровая Спина </span>
        </div>
      </div>
      <div className="flex flex-col justify-between p-4 bg-background rounded-xl h-[132px]">
        <div className="flex flex-col gap-1 font-bold text-sm">
          <span>Годовой абонемент</span>
          <span className="text-green text-xs">4 месяца</span>
        </div>
        <Button className="w-fit" variant="purple" size="sm">
          Продлить
        </Button>
      </div>
    </div>
  );
};

export default UserSection;

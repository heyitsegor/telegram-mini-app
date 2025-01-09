import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

type DateButtonProps = {
  date: number;
  day: string;
  isActive: boolean;
  onClick: () => void;
};

const DateButton = ({ date, day, isActive, onClick }: DateButtonProps) => {
  return (
    <Button
      variant={isActive ? "purple" : "background"}
      size="dateButton"
      onClick={onClick}
      className="flex gap-[5px] items-center leading-none"
    >
      {date}
      <span className={cn(isActive ? "text-pink" : "text-grayLight", "")}>
        {"//"}
      </span>
      {day}
    </Button>
  );
};

export default DateButton;

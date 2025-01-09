import React from "react";
import { Button } from "./button";

type ScheduleTabButtonProps = {
  title: string;
  time: string;
  isActive: boolean;
  onClick: () => void;
};

const ScheduleTabButton = ({
  title,
  time,
  isActive,
  onClick,
}: ScheduleTabButtonProps) => {
  return (
    <Button
      onClick={onClick}
      size="xl"
      variant={isActive ? "purpleOutline" : "background"}
      className="flex flex-col items-start justify-between w-full italic text-wrap text-left"
    >
      <span className="text-sm leading-none font-extrabold ">{title}</span>
      <span className="text-xs leading-none text-purple font-black">
        {time}
      </span>
    </Button>
  );
};

export default ScheduleTabButton;

import GymStationLogoSmall from "@/components/shared/gym-station-logo-small";
import UserIcon from "@/components/shared/user-icon";
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  return (
    <header className="flex items-center justify-between pt-2">
      <GymStationLogoSmall />
      <div className="flex gap-1">
        <Select>
          <SelectTrigger className="w-[138px] text-xs leading-none font-bold">
            <SelectValue placeholder="Алые паруса" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-purple flex justify-center items-center"
        >
          <UserIcon />
        </a>
      </div>
    </header>
  );
};

export default Header;

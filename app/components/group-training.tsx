import LocationIcon from "@/components/shared/location-icon";
import { Button } from "@/components/ui/button";
import DateButton from "@/components/ui/date-button";
import ScheduleTabButton from "@/components/ui/schedule-tab-button";
import Image from "next/image";
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const dates = [
  {
    date: 19,
    day: "Чт",
  },
  {
    date: 20,
    day: "Пт",
  },
  {
    date: 21,
    day: "Сб",
  },
  {
    date: 22,
    day: "Вс",
  },
  {
    date: 23,
    day: "Пн",
  },
  {
    date: 24,
    day: "Вт",
  },
  {
    date: 25,
    day: "Ср",
  },
];

const schedule = [
  {
    title: "Бразильские ягодицы",
    time: "13:00",
  },
  {
    title: "Здоровая Спина",
    time: "13:00",
  },
  {
    title: "Super Sculpt",
    time: "13:00",
  },
  {
    title: "Pilates",
    time: "13:00",
  },
  {
    title: "Хатха-йога",
    time: "14:20",
  },
];

const GroupTraining = () => {
  const [activeDate, setActiveDate] = React.useState(19);
  const [activeTab, setActiveTab] = React.useState("Хатха-йога");

  return (
    <div className="mb-10 flex flex-col gap-4">
      <h2 className="leading-none text-2xl italic font-black">
        ГРУППОВЫЕ
        <br />
        ПРОГРАММЫ
      </h2>
      <div className="flex flex-col gap-3">
        <Select>
          <SelectTrigger className="w-full text-base leading-none font-bold">
            <SelectValue placeholder="Выбрать направление" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full text-base leading-none font-bold">
            <SelectValue placeholder="Выбрать клуб" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-[10px] overflow-x-scroll">
        {dates.map((date) => (
          <DateButton
            onClick={() => setActiveDate(date.date)}
            key={date.date}
            date={date.date}
            day={date.day}
            isActive={date.date === activeDate}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <div className="w-[115px] shrink-0 flex flex-col gap-2">
          {schedule.map((item) => (
            <ScheduleTabButton
              onClick={() => setActiveTab(item.title)}
              key={item.title}
              title={item.title}
              time={item.time}
              isActive={item.title === activeTab}
            />
          ))}
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="p-4 flex flex-col gap-3 bg-background rounded-xl">
            <h3 className="font-black italic text-2xl leading-none">
              Хатха-йога
            </h3>
            <div className="flex flex-col gap-[5px]">
              <span className="text-grayDark text-xs">Тренер</span>
              <h4 className="text-pink text-sm font-black leading-none italic">
                Ирина Копылевич
              </h4>
            </div>
            <p className="text-xs">
              Хатха-йога это истинная
              <br />
              практика асан, мудр,
              <br />
              дыхательных практик,
              <br />
              медитаций в системе,
              <br />
              поднимающей энергию и
              <br />
              приумножающей, оздоравливая
              <br />и омолаживая организм
            </p>
            <div className="flex flex-col gap-[5px]">
              <span className="text-grayDark text-xs">Уровень подготовки</span>
              <h4 className="text-pink text-sm font-black leading-none italic">
                Любой
              </h4>
            </div>
            <div className="flex items-center gap-1 text-lg italic font-black leading-none">
              <LocationIcon className="w-5 h-5" /> Европейский
            </div>
            <Button
              variant="purple"
              size="lg"
              className="w-fit py-[13px] font-bold"
            >
              Записаться
            </Button>
          </div>
          <Image
            src="/group-training.png"
            alt="group training"
            width={220}
            height={123}
          />
        </div>
      </div>
    </div>
  );
};

export default GroupTraining;

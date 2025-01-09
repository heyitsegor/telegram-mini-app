import ArrowRightIcon from "@/components/shared/arrow-right-icon";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CoachCard from "./coach-card";

const coaches = [
  {
    image: "/coach-1.png",
    location: "Алые паруса",
    name: "Ирина Копылевич",
    description: "Инструктор групповых программ, Персональный тренер",
  },
  {
    image: "/coach-2.png",
    location: "Чистые пруды",
    name: "MORAD",
    description: "Инструктор групповых программ",
  },
  {
    image: "/coach-3.png",
    location: "Атлант",
    name: "Евгений Васенев",
    description: "Инструктор тренажёрного зала, Персональный тренер",
  },
  {
    image: "/coach-4.png",
    location: "Европейский",
    name: "Валерия Кардакова",
    description: "Фитнес инструктор, инструктор тренажёрного зала",
  },
];

const FitnessCoachCarousel = () => {
  return (
    <div className="mb-10">
      <div className="flex flex-col gap-2 italic font-black">
        <a
          href="#"
          className="flex items-center gap-4 text-lg leading-none text-pink "
        >
          Все тренеры
          <ArrowRightIcon />
        </a>
        <h2 className="leading-none text-[26px]">НАШИ ТРЕНЕРЫ</h2>
      </div>
      <Carousel className="w-full mt-4">
        <CarouselContent className="ml-0">
          {coaches.map((coach, index) => (
            <CarouselItem
              key={index}
              className="[&:not(:last-child)]:mr-2 pl-0 w-[300px] basis-[null] select-none"
            >
              <CoachCard coach={coach} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center gap-1 mt-4">
        <div className="w-2 h-2 rounded-[2px] bg-purple"></div>
        <div className="w-2 h-2 rounded-[2px] bg-grayLight/50"></div>
        <div className="w-2 h-2 rounded-[2px] bg-grayLight/50"></div>
        <div className="w-2 h-2 rounded-[2px] bg-grayLight/50"></div>
      </div>
    </div>
  );
};

export default FitnessCoachCarousel;

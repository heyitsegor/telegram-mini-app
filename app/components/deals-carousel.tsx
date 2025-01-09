import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import DealCard from "./deal-card";

const deals = [
  {
    image: "/deal-1.png",
    title: "Новый 7-й фитнес клуб на лепсе",
    description: "Распродажа абонементов, со cкидкой до 30%",
  },
  {
    image: "/deal-2.png",
    title: "Новый 7-й фитнес клуб на лепсе",
    description: "Распродажа абонементов, со cкидкой до 30%",
  },
];

const DealsCarousel = () => {
  return (
    <div className="mt-6 mb-10">
      <Carousel className="w-full">
        <CarouselContent className="ml-0">
          {deals.map((deal, index) => (
            <CarouselItem
              key={index}
              className="[&:not(:last-child)]:mr-2 pl-0 w-[343px] basis-[null] select-none"
            >
              <DealCard deal={deal} />
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

export default DealsCarousel;

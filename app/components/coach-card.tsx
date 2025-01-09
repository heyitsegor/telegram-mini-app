import LocationIcon from "@/components/shared/location-icon";
import Image from "next/image";
import React from "react";

type CoachCardProps = {
  coach: { image: string; location: string; name: string; description: string };
};

const CoachCard = ({ coach }: CoachCardProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="relative w-[300px] h-[330px] overflow-hidden rounded-2xl">
        <Image src={coach.image} alt={coach.name} width={300} height={330} />
        <div className="absolute bottom-0 left-0">
          <svg
            width={233}
            height={90}
            viewBox="0 0 233 90"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m0 0.65381v30h30c-16.568 0-30-13.431-30-30z" fill="#fff" />
            <path
              d="m7.1549e-7 30.654-7.1549e-7 60h203v-30c0-16.568-13.431-30-30-30h-173z"
              fill="#fff"
            />
            <path
              d="m233 90.654h-30v-30c0 16.569 13.431 30 30 30z"
              fill="#fff"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 flex items-center gap-1 p-5 text-lg italic font-black leading-none">
          <LocationIcon className="w-5 h-5" /> {coach.location}
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="text-2xl italic font-black">{coach.name}</div>
        <div className="">{coach.description}</div>
      </div>
    </div>
  );
};

export default CoachCard;

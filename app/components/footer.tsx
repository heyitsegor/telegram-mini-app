import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import GymStationLogoBig from "@/components/shared/gym-station-logo-big";
import VKLogo from "@/components/shared/vk-logo";
import WhatsAppLogo from "@/components/shared/whatsapp-logo";
import TelegramLogo from "@/components/shared/telegram-logo";
import FamilyLogo from "@/components/shared/family-logo";
import { Button } from "@/components/ui/button";
import Container from "./container";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white bg-blue">
      <Container className="flex flex-col gap-8 py-4 leading-[130%] relative">
        <div className="absolute top-0 right-0">
          <a href="#" className="flex">
            <div className="h-[30px] w-[30px] bg-white after:block after:w-full after:h-full after:bg-blue after:rounded-tr-2xl"></div>
            <div className="h-[70px] w-[100px] bg-white rounded-b-2xl flex items-center justify-center">
              <ChevronUp className="w-6 h-6 text-black" />
            </div>
            <div className="h-[30px] w-[30px] bg-white after:block after:w-full after:h-full after:bg-blue after:rounded-tl-2xl"></div>
          </a>
        </div>
        <GymStationLogoBig />
        <Accordion
          type="single"
          collapsible
          className="flex flex-col w-full gap-3"
        >
          <AccordionItem value="services">
            <AccordionTrigger>Услуги</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <a href="#">menu item 1</a>
              <a href="#">menu item 2</a>
              <a href="#">menu item 3</a>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="places">
            <AccordionTrigger>Клубы</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <a href="#">GS Алые паруса</a>
              <a href="#">GS Европейский</a>
              <a href="#">GS РУМ</a>
              <a href="#">GS Чистые пруды</a>
              <a href="#">GS Атлант</a>
              <a href="#">GS Лепсе</a>
              <a href="#">GS Солнечный берег</a>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="menu">
            <AccordionTrigger>Меню</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <a href="#">menu item 1</a>
              <a href="#">menu item 2</a>
              <a href="#">menu item 3</a>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-2xl font-black leading-none">
              +7 (8332) 74-47-19
            </p>
            <p className="leading-none text-yellow">info@gym-s.ru</p>
          </div>
          <Button variant="yellow" size="lg">
            Записаться на тест-драйв
          </Button>
          <div className="border border-solid border-grayDark rounded-full justify-between h-[50px] items-center flex ">
            <div className="flex items-center justify-center w-full h-full py-[10px]">
              <VKLogo />
            </div>
            <div className="h-[30px] bg-grayDark w-[1px]" />
            <div className="flex items-center justify-center w-full h-full py-[10px]">
              <WhatsAppLogo />
            </div>
            <div className="h-[30px] bg-grayDark w-[1px]" />
            <div className="flex items-center justify-center w-full h-full py-[10px]">
              <TelegramLogo />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 p-4 rounded-md bg-backgroundDark">
          <div className="flex flex-col gap-1">
            <p className="text-gray">Компания</p>
            <p>ООО «ФИТНЕС КЛУБ»</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray">Адрес</p>
            <p>г. Киров, ул. Ивана Попова, 56, пом. 1007</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray">ИНН</p>
            <p>4345478701</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray">ОГРН</p>
            <p>1184350004233</p>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <a href="#">Политика в отношении обработки персональных данных</a>
          <a href="#">Согласие на обработку персональных данных</a>
        </div>
        <div className="flex flex-col gap-1">
          <p>2024 © GYM STATION</p>
          <div className="flex gap-[18px] items-center">
            <p>Создание и продвижение</p>
            <a href="#">
              <FamilyLogo />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

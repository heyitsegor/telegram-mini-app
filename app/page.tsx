/* eslint-disable */
"use client";
import { useEffect } from "react";
import { init, retrieveLaunchParams } from "@telegram-apps/sdk-react";
import { useClientOnce } from "@/hooks/useClientOnce";

import Header from "./components/header";
import UserSection from "./components/user-section";
import DealsCarousel from "./components/deals-carousel";
import FitnessCoachCarousel from "./components/fitness-coach-carousel";
import PromoDeal from "./components/promo-deal";
import GroupTraining from "./components/group-training";
import Footer from "./components/footer";
import Container from "./components/container";

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        initData?: string;
      };
    };
  }
}

export default function Home() {
  useClientOnce(() => {
    init();
  });

  useEffect(() => {
    const getUserChatData = async () => {
      const userData = await fetch("/api/telegram-chats");
      console.log(userData);
    };

    getUserChatData();
  }, []);

  useEffect(() => {
    const { initData } = retrieveLaunchParams();

    console.log(initData);
  }, [window.Telegram]);

  return (
    <>
      <main className="flex flex-col bg-white">
        <Container>
          <Header />
          <UserSection />
          <DealsCarousel />
          <FitnessCoachCarousel />
          <PromoDeal />
          <GroupTraining />
        </Container>
      </main>
      <Footer />
    </>
  );
}

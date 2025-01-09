"use client";
import { useEffect } from "react";
// import { init, retrieveLaunchParams } from "@telegram-apps/sdk-react";

// import { useClientOnce } from "@/hooks/useClientOnce";

import Header from "./components/header";
import UserSection from "./components/user-section";
import DealsCarousel from "./components/deals-carousel";
import FitnessCoachCarousel from "./components/fitness-coach-carousel";
import PromoDeal from "./components/promo-deal";
import GroupTraining from "./components/group-training";
import Footer from "./components/footer";
import Container from "./components/container";

export default function Home() {
  // useClientOnce(() => {
  //   init();
  // });

  // const { initDataRaw, initData } = retrieveLaunchParams();

  useEffect(() => {
    const getUserChatData = async () => {
      const userData = await fetch("/api/user-chats");
      console.log(userData);
    };

    getUserChatData();
  }, []);

  // useEffect(() => {
  //   console.log(initData?.chat);
  // }, [initData]);

  // useEffect(() => {
  //   console.log(initDataRaw);
  // }, [initDataRaw]);

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

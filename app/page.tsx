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
    const { initData } = retrieveLaunchParams();

    const checkIfUserAlreadyInDatabase = async () => {
      const telegramChat = await fetch(
        `/api/telegram-chats?chatId=${initData?.user?.id}`
      )
        .then((response) => response.json())
        .catch((error) => {
          console.error("Error:", error);
        });

      console.log(
        `/api/telegram-chats?chatId=${initData?.user?.id}`,
        telegramChat
      );

      if (telegramChat?.length > 0) return;

      await sendCustomMessage(
        `Бот открыт впервые, привет, ${initData?.user?.firstName}!`
      );

      const serverResponse = await fetch("api/telegram-chats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatId: String(initData?.user?.id),
        }),
      })
        .then((response) => response.json())
        .catch((error) => {
          console.error("Error:", error);
        });

      console.log(serverResponse);
    };

    checkIfUserAlreadyInDatabase();
  }, [window.Telegram]);

  const sendCustomMessage = async (message: string) => {
    const { initData } = retrieveLaunchParams();

    const botResponse = await fetch("api/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chatId: initData?.user?.id,
        text: message,
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
      });

    console.log(botResponse);
  };

  return (
    <>
      <main className="flex flex-col bg-white">
        <Container>
          <Header />
          <UserSection
            onSendCustomMessage={() =>
              sendCustomMessage(`This message was sent by a button press`)
            }
          />
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

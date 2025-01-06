"use client";
import { useEffect } from "react";
import { init, retrieveLaunchParams } from "@telegram-apps/sdk-react";

import { useClientOnce } from "@/hooks/useClientOnce";

export default function Home() {
  useClientOnce(() => {
    init();
  });

  const { initDataRaw, initData } = retrieveLaunchParams();

  useEffect(() => {
    const getUserChatData = async () => {
      const userData = await fetch("/api/user-chats");
      console.log(userData);
    };

    getUserChatData();
  }, []);

  useEffect(() => {
    console.log(initData?.chat);
  }, [initData]);

  useEffect(() => {
    console.log(initDataRaw);
  }, [initDataRaw]);

  return (
    <main className="bg-black flex flex-col items-center gap-2 text-white pt-20 text-center min-h-screen">
      <h1>Добро пожаловать в Mini App</h1>

      <div className="">
        <p>👤 User: {initData ? initData.user?.firstName : "loaing..."}</p>
        <p>🆔 UserID: {initData ? initData.user?.id : "loading..."}</p>
        <p>💬 ChatID: {initData ? JSON.stringify(initData) : "loading..."}</p>
      </div>
      <button className="bg-blue-600 w-fit text-white border-none px-6 py-3 rounded-md">
        Отправить данные
      </button>
    </main>
  );
}

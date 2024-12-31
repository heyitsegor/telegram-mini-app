"use client";
import { useState, useEffect } from "react";
import { type WebAppUser } from "@twa-dev/types";

export default function Home() {
  const [user, setUser] = useState<WebAppUser | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const WebApp = require("@twa-dev/sdk").default;
      WebApp.ready();

      setUser(WebApp.initDataUnsafe?.user || null);
    }
  }, []);

  return (
    <main className="bg-black flex flex-col items-center gap-2 text-white pt-20 text-center min-h-screen">
      <h1>Добро пожаловать в Mini App</h1>

      <div className="">
        <p>
          👤 User: {user?.first_name} {user?.last_name}
        </p>
        <p>🆔 ID: {user?.id}</p>
      </div>
      <button className="bg-blue-600 w-fit text-white border-none px-6 py-3 rounded-md">
        Отправить данные
      </button>
    </main>
  );
}

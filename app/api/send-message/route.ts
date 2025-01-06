import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { chatId, text } = await req.json();

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      }),
    });

    console.log("Telegram response:", response);

    if (response.ok) {
      return NextResponse.json(
        { success: true, message: "Message sent successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: "Failed to send message." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error sending message.",
      },
      { status: 500 }
    );
  }
};

export async function GET() {}

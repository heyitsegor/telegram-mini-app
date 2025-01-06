import {
  createTelegramChat,
  getAllTelegramChats,
  deleteTelegramChat,
} from "@/prisma/telegram-chats";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { chatId } = await req.json();
    const telegramChat = await createTelegramChat(chatId);
    return NextResponse.json(telegramChat, { status: 201 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
};

export async function GET() {
  try {
    const telegramChat = await getAllTelegramChats();
    return NextResponse.json(telegramChat, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export const DELETE = async (req: NextRequest) => {
  try {
    const { chatId } = await req.json();
    const telegramChat = await deleteTelegramChat(chatId);
    return NextResponse.json(telegramChat, { status: 201 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
};

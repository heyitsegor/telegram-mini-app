import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTelegramChat = async (chatId: string) => {
  try {
    return await prisma.telegramChats.create({
      data: {
        chat_id: chatId,
      },
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : `Error creating telegram chat ${chatId}`;
    throw new Error(errorMessage);
  }
};

export const getTelegramChats = async (chatId?: string) => {
  try {
    const telegramChats = await prisma.telegramChats.findMany({
      where: chatId
        ? {
            chat_id: chatId,
          }
        : {},
    });
    return telegramChats;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Error fetching telegram chats";
    throw new Error(errorMessage);
  }
};

export const deleteTelegramChat = async (chatId: string) => {
  try {
    return await prisma.telegramChats.delete({
      where: {
        chat_id: chatId,
      },
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : `Error deleting chat ${chatId}`;
    throw new Error(errorMessage);
  }
};

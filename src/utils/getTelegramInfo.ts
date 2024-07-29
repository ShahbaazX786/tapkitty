import axios from 'axios';

const telegramToken = import.meta.env.TELEGRAM_API!;
const api = axios.create({
    baseURL: `https://api.telegram.org/bot${telegramToken}/`,
});

export async function getChat(chatId: string) {
    const response = await api.get(`getChat`, {
        params: {
            chat_id: chatId,
        },
    });
    return response.data;
}
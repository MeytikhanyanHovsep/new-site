import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    const { name, phone } = body;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const text = `Новая заявка:\nИмя: ${name}\nТелефон: ${phone}`;

    try {
        const response = await fetch(
            `https://api.telegram.org/bot${token}/sendMessage`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: chatId, text }),
            }
        );

        const data = await response.json();

        if (data.ok) return NextResponse.json({ message: "Заявка отправлена" });
        else
            return NextResponse.json(
                { message: "Ошибка Telegram", error: data },
                { status: 500 }
            );
    } catch (err: any) {
        return NextResponse.json(
            { message: "Ошибка сервера", error: err.message },
            { status: 500 }
        );
    }
}

export async function OPTIONS() {
    return NextResponse.json({}, { status: 200 });
}

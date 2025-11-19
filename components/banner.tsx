"use client";
import React, { useState } from "react";

type Props = {};

export default function Banner({}: Props) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/send-to-telegram", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, phone }),
            });

            const data = await response.json();
            alert(data.message);
        } catch (error) {
            alert("Ошибка соединения. Попробуйте еще раз.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="app">
            <div className="content spacer items-center lg:flex lg:flex-col">
                <div className="app__left">
                    <p className="app__title">
                        Сколько стоит обработка моего помещения?
                    </p>
                    <p className="app__desc">
                        Оставьте заявку и мы свяжемся с вами.
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="app__form spacer md:flex md:flex-col"
                >
                    <input
                        type="text"
                        name="name"
                        className="form__field"
                        placeholder="Ваше имя"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div className="form__field-wrap">
                        <input
                            type="text"
                            name="phone"
                            className="form__field"
                            placeholder="Ваш телефон"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="yellow-btn form__btn"
                            disabled={loading}
                        >
                            {loading ? "Отправка..." : "Расчитать"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

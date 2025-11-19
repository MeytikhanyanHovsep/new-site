"use client";
import React, { useState } from "react";
import Image from "next/image";

type Props = {};

export default function main({}: Props) {
    const [inpValue, setInpValue] = useState("");
    const advantages = [
        {
            icon: "/icons/user.png",
            text: "Безопасные препараты без запаха",
            alt: "Безопасность",
        },
        {
            icon: "/icons/time.png",
            text: "Срочный выезд 30 минут 24/7",
            alt: "Срочный выезд",
        },
        {
            icon: "/icons/mark.png",
            text: "Гарантия по договору 5 лет",
            alt: "Гарантия",
        },
        {
            icon: "/icons/bug.png",
            text: "Повторная обработка бесплатно",
            alt: "Повторная обработка",
        },
        {
            icon: "/icons/organization.png",
            text: "Государственная аттестация",
            alt: "Аттестация",
        },
    ];

    return (
        <section className="main content">
            <div className="main__block bg-[url('/main-bg.jpg')] bg-center">
                <div className="main__text">
                    <h1>
                        Уничтожение всех видов насекомых
                        <span> от 700₽</span>
                    </h1>
                    <div className="main__action">
                        <p className="main__action-title">
                            Акция <strong>"Держим старые цены"</strong>
                        </p>
                        <p className="main__action-desc">
                            Всего 2 дня скидка <strong>-25%</strong>
                        </p>
                    </div>
                    <form action="sendmessage.php" className="form">
                        <input
                            type="text"
                            name="theme"
                            className="hidden sf-hidden"
                        />
                        <div className="form__field-wrap">
                            <input
                                type="text"
                                name="phone"
                                className="form__field"
                                placeholder="Ваш телефон"
                                required
                                value={inpValue}
                                onChange={(e) => setInpValue(e.target.value)}
                            />
                            <button className="yellow-btn form__btn">
                                Заказать дезинфекцию
                            </button>
                        </div>
                        <p className="form__info">
                            Нажимая кнопку «Заказать дезинфекцию» вы даёте
                            согласие на обработку персональных данных
                        </p>
                    </form>
                </div>
                <div className="main__info flex gap-[10px] justify-normal !pl-[10px]  ">
                    <Image
                        src="/icons/virus.png"
                        width={35}
                        height={35}
                        alt="virus"
                        className=" object-contain min-h-[30px] min-w-[30px] mr-[5x]"
                    />
                    <p className="main__info-des">
                        100% уничтожение тараканов, клопов, клещей, комаров и
                        других насекомых
                    </p>
                </div>
            </div>
            <div className="main__advantages lg:mt-[10px] !grid grid-cols-5 lg:grid-cols-3 !gap-[10px] flex-container sm:grid-cols-2">
                {advantages.map((advantage, index) => (
                    <div
                        key={index}
                        className="main__advantage !pt-[20px] !m-0 px-[20px] !w-full"
                    >
                        <Image
                            src={advantage.icon}
                            width={50}
                            height={50}
                            className=" object-contain mb-[5px] min-h-[40px] min-w-[40px]"
                            alt="virus"
                        />
                        <p className="main__advantage-desc">
                            Безопасные препараты без запаха
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

import React from "react";
import Image from "next/image";

export default function Advantages() {
    return (
        <section className="advantages content">
            <h2>Дезинсекция помещений, квартир, офисов, домов и участков</h2>
            <p className="block-desc">
                Делаем полный комплекс обработки от вредителей, упор на качество
                и безопасность работ.{" "}
                <span className="font-[700]">
                    Такараны, клопы, клещи, кожееды, муравьи, комары, моль,
                    блохи, мухи и другие насекомые
                </span>{" "}
                - больше не будут для вас проблемой.
            </p>
            <div className="advantages__wrap spacer">
                <div className="advantages__photo">
                    <Image
                        src="/advantages-bg.jpg"
                        width={560}
                        height={560}
                        className=" object-cover photo-full-size "
                        alt="advantages"
                    />
                </div>
                <div className="advantages__right">
                    <div className="advantage">
                        <span className="advantage__number">01</span>
                        <p className="advantage__title">Работаем 24/7</p>
                        <p className="advantage__desc">
                            Работаем без выходных и праздников. Приедем уже
                            через 30 минут или в любое удобное для Вас время.
                        </p>
                    </div>
                    <div className="advantage">
                        <span className="advantage__number">02</span>
                        <p className="advantage__title">Гарантия результата</p>
                        <p className="advantage__desc">
                            Если первичная обработка не поможет, вернемся и
                            проведем повторную обработку бесплатно до достижения
                            100% результата.
                        </p>
                    </div>
                    <div className="advantage">
                        <span className="advantage__number">03</span>
                        <p className="advantage__title">
                            Оплата только по факту
                        </p>
                        <p className="advantage__desc">
                            Берем деньги только после того, как уничтожим всех
                            паразитов в Вашей квартире, доме, офисе.
                        </p>
                    </div>
                    <div className="advantage">
                        <span className="advantage__number">04</span>
                        <p className="advantage__title">Безопасные препараты</p>
                        <p className="advantage__desc">
                            Используем эффективные импортные составы, которые
                            безопасны для детей, домашних животных, мебели и
                            техники.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

import React from "react";
import Image from "next/image";

const Footer = () => {
    const advantages = [
        {
            icon: "/icons/footer-1.png",
            text: "Безопасные препараты без запаха",
            alt: "Безопасность",
        },
        {
            icon: "/icons/footer-2.png",
            text: "Срочный выезд 30 минут 24/7",
            alt: "Срочный выезд",
        },
        {
            icon: "/icons/footer-3.png",
            text: "Гарантия по договору 5 лет",
            alt: "Гарантия",
        },
        {
            icon: "/icons/footer-4.png",
            text: "Повторная обработка бесплатно",
            alt: "Повторная обработка",
        },
        {
            icon: "/icons/footer-5.png",
            text: "Государственная аттестация",
            alt: "Аттестация",
        },
    ];

    return (
        <footer className="footer">
            <div className="content">
                {/* Преимущества */}
                <div className="footer__advantages grid grid-cols-5 gap-[20px] flex-container">
                    {advantages.map((advantage, index) => (
                        <div
                            key={index}
                            className="footer__advantage !pt-[20px] px-[20px] !w-full"
                        >
                            <Image
                                src={advantage.icon}
                                width={50}
                                height={50}
                                className="object-contain mb-[5px] min-h-[40px] min-w-[40px]"
                                alt={advantage.alt}
                            />
                            <p className="footer__advantage-desc">
                                {advantage.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Основной футер */}
                <div className="footer__wrap spacer">
                    <div className="footer__left spacer">
                        <div className="footer__left-block">
                            <a href="#" className="logo">
                                <Image
                                    src="/icons/footer-2.png"
                                    width={60}
                                    height={62}
                                    className=" object-contain min-w-[60px] mr-[5px]"
                                    alt="phone"
                                />
                                <span>
                                    <strong>Городская</strong> санитарная служба
                                </span>
                            </a>
                            <p className="footer__title">
                                100% уничтожение всех видов паразитов, грызунов,
                                насекомых и плесени
                            </p>
                        </div>
                        <div className="footer__callback">
                            <p className="footer__callback-title">
                                Наш телефон:
                            </p>
                            <a
                                href="tel:+78129020290"
                                className="footer__callback-phone"
                            >
                                +7 (812) 902-02-90
                            </a>
                        </div>
                    </div>

                    {/* Копирайт */}
                    <p className="copyright">
                        ИП Саляхетдинова А.А. ОГРНИП: 324774600310583 ИНН:
                        771615706332
                        <br />
                        <a href="https://xn--90a1af.xn--80aidkwcon4i.xn--p1ai/contacts.html">
                            Лицензия
                        </a>{" "}
                        <br />
                        © 2024 Все права защищены <br />
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

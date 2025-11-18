import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

export default function Header({}: Props) {
    return (
        <header className="header">
            <div className="content !flex !justify-between spacer">
                <a href="#" className="logo">
                    <Image
                        src="/icons/logo.png"
                        width={60}
                        height={62}
                        className=" object-contain min-w-[60px] mr-[5px]"
                        alt="phone"
                    />
                    <span>
                        <strong>Городская</strong> санитарная служба
                    </span>
                </a>
                <nav className="nav spacer">
                    <a
                        href="#"
                        className="nav__link js-scroll-link"
                        data-href="."
                    >
                        Цены
                    </a>
                    <a
                        href="#"
                        className="nav__link js-scroll-link"
                        data-href=".prices"
                    >
                        Гарантия
                    </a>
                    <a
                        href="#"
                        className="nav__link js-scroll-link"
                        data-href=".works"
                    >
                        Типы обработки
                    </a>
                    <a
                        href="#"
                        className="nav__link js-scroll-link"
                        data-href=".reviews"
                    >
                        Отзывы
                    </a>
                    <a
                        href="#"
                        className="nav__link js-scroll-link"
                        data-href=".contacts"
                    >
                        Контакты
                    </a>
                </nav>
                <div className="header__right">
                    <a href="tel:+78129020290" className="header__phone">
                        <Image
                            src="/icons/call.png"
                            width={24}
                            height={24}
                            alt="phone"
                        />
                        <span>+7 (812) 902-02-90</span>
                    </a>
                    <button
                        className="blue-btn header__btn js-popup-link"
                        data-href=".popup-app"
                        data-theme="Калькулятор"
                    >
                        Калькулятор
                    </button>
                </div>
                <span className="menu-btn sm:hidden"></span>
            </div>
        </header>
    );
}

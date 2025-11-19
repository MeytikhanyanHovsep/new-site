"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            <div className="content !flex !justify-between spacer">
                {/* Logo */}
                <a href="#" className="logo">
                    <Image
                        src="/icons/logo.png"
                        width={60}
                        height={62}
                        className="object-contain min-w-[60px] mr-[5px]"
                        alt="logo"
                    />
                    <span>
                        <strong>Городская</strong> санитарная служба
                    </span>
                </a>

                <nav className="nav spacer hidden ">
                    <a href="#pricing" className="nav__link">
                        Цены
                    </a>
                    <a href="#pricing" className="nav__link">
                        Гарантия
                    </a>
                    <a href="#works" className="nav__link">
                        Типы обработки
                    </a>
                    <a href="#reviews" className="nav__link">
                        Отзывы
                    </a>
                    <a href="#contacts" className="nav__link">
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
                    <button className="blue-btn header__btn js-popup-link">
                        Калькулятор
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <span
                    className={`menu-btn hidden lg:block  ${
                        open ? "open" : ""
                    }`}
                    onClick={() => setOpen(!open)}
                ></span>
            </div>

            {/* Mobile Dropdown Menu */}
            {open && (
                <div className="mobile-menu hidden">
                    <a
                        href="#pricing"
                        className="mobile-link"
                        onClick={() => setOpen(false)}
                    >
                        Цены
                    </a>
                    <a
                        href="#pricing"
                        className="mobile-link"
                        onClick={() => setOpen(false)}
                    >
                        Гарантия
                    </a>
                    <a
                        href="#works"
                        className="mobile-link"
                        onClick={() => setOpen(false)}
                    >
                        Типы обработки
                    </a>
                    <a
                        href="#reviews"
                        className="mobile-link"
                        onClick={() => setOpen(false)}
                    >
                        Отзывы
                    </a>
                    <a
                        href="#contacts"
                        className="mobile-link"
                        onClick={() => setOpen(false)}
                    >
                        Контакты
                    </a>

                    {/* header__right appears here on mobile */}
                    <div className="mt-4 flex flex-col gap-3">
                        <a href="tel:+78129020290" className="header__phone">
                            <Image
                                src="/icons/call.png"
                                width={24}
                                height={24}
                                alt="phone"
                            />
                            <span>+7 (812) 902-02-90</span>
                        </a>
                        <button className="blue-btn header__btn js-popup-link">
                            Калькулятор
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}

"use client";
import React, { useState } from "react";
import Image from "next/image";

const Works = () => {
    const [works, setWorks] = useState([
        {
            title: "ДЕЗИНСЕКЦИЯ",
            params: [
                "Обработка от клопов",
                "Уничтожение тараканов",
                "Уничтожение клещей, комаров, мух и мошек",
                "Удаление моли",
                "Уничтожение ос и осиных гнезд",
                "Уничтожение колоний муравьев",
                "Обработка от мокриц и чешуйниц",
                "Обработка от жука Короеда",
            ],

            img: "bug-2.png",
            open: false,
            showMore: ["Уничтожение блох", "Уничтожение шершней их гнезд"],
        },
        {
            title: "ДЕЗИНФЕКЦИЯ",
            params: [
                "Удаление плесени и грибка",
                "Дезинфекция бактерий",
                "Дезинфекция вентиляции",
                "Обработка транспорта",
                "Обеззараживание вирусов",
                "Демеркуризация (удаление ртути)",
                "Обработка морозильных камер",
                "Дезинфекция квартир и домов",
            ],
            open: false,
            img: "virus-2.png",
            showMore: ["Обработка складов и офисов", "Удаление мха с крыш"],
        },
        {
            title: "ДЕРАТИЗАЦИЯ",
            params: [
                "Ликвидирование грызунов",
                "Удаление кротов и землероек",
                "Уничтожение крыс",
                "Уничтожение мышей",
            ],
            open: false,

            img: "mouse.png",
            showMore: [],
        },
        {
            title: "Фумигация",
            params: [
                "Фумигация складских помещений",
                "Фумигация тары на экспорт",
                "Фумигация поддонов и стеллажей",
                "Фумигация грузов",
                "Фумигация квартир и домов",
            ],
            open: false,

            img: "box.png",
            showMore: [],
        },
    ]);
    const toggleWork = (index: number) => {
        setWorks((prevWorks) =>
            prevWorks.map((work, i) =>
                i === index ? { ...work, open: !work.open } : work
            )
        );
    };

    return (
        <section className="works content">
            <h2>Виды обработки</h2>
            <p className="block-desc">
                Беремся за самые сложные случаи. Все варианты обработки и полный
                цикл. Работа по договору, заключаем контракты на регулярное
                обслуживание организаций.
            </p>
            <div className="works__list !flex !items-start spacer_top">
                {works.map((work, index) => (
                    <React.Fragment key={index}>
                        <div className="work !min-h-full">
                            <div className="work__top va-middle">
                                <span className="work__icon">
                                    <Image
                                        src={`/icons/${work.img}`}
                                        width={48}
                                        height={53}
                                        className="pos-center object-cover min-w-[48px]"
                                        alt={work.title}
                                    />
                                </span>
                                <p className="work__title">{work.title}</p>
                            </div>
                            <ul className="work__params">
                                {work.params.map((param, paramIndex) => (
                                    <li
                                        key={paramIndex}
                                        className="work__param"
                                    >
                                        {param}
                                    </li>
                                ))}
                            </ul>

                            {work.showMore.length > 0 && (
                                <>
                                    {work.open && (
                                        <ul
                                            className={`work__params work__params_else ${
                                                work.open ? "" : "sf-hidden"
                                            }`}
                                        >
                                            {work.showMore.map(
                                                (param: string, ind) => (
                                                    <li
                                                        key={ind}
                                                        className="work__param"
                                                    >
                                                        {param}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}
                                    <span
                                        className="work__else"
                                        onClick={() => toggleWork(index)}
                                    >
                                        {work.open ? "Скрыть" : "Смотреть ещё"}
                                    </span>
                                </>
                            )}
                        </div>
                        {index < works.length - 1 && (
                            <i className="works__colon"></i>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Works;

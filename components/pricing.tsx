import React from "react";
import Image from "next/image";

const Pricing = () => {
    const pricingPlans = [
        {
            title: "Санитарная обработка квартир",
            discount: "-25%",
            items: [
                { label: "1 - комната", price: "от 700₽" },
                { label: "Однокомнатная", price: "от 1150₽" },
                { label: "Двухкомнатная", price: "от 1350₽" },
                { label: "3 - комнаты и более", price: "от 1550₽" },
            ],
            buttonTheme: "Санитарная обработка квартир",
        },
        {
            title: "Санобработка частных домов и помещений Юр.лиц",
            discount: "-25%",
            items: [
                { label: "до 100 м²", price: "от 750₽" },
                { label: "100 м² - 200 м²", price: "от 1450₽" },
                { label: "200 м² - 300 м²", price: "от 2850₽" },
                { label: "свыше 300 м²", price: "от 3950₽" },
            ],
            buttonTheme: "Санобработка частных домов и помещений Юр.лиц",
        },
        {
            title: "Санобработка участков и территорий",
            discount: "-25%",
            items: [
                { label: ">25 соток", price: "от 200₽/ сотка" },
                { label: "15 - 25 соток", price: "от 300₽/ сотка" },
                { label: "7 - 15 соток", price: "от 350₽/ сотка" },
                { label: "до 7 соток", price: "от 400₽ / сотка" },
            ],
            buttonTheme: "Санобработка участков от Насекомых и Грызунов",
        },
    ];

    const objectTypes = [
        { name: "Квартиры и дома", img: "sofa.png" },
        { name: "Офисные помещения", img: "building.png" },
        { name: "Гостинечный бизнес", img: "bed.png" },
        { name: "Промышленные объекты", img: "flower.png" },
        { name: "Медицинские учреждения", img: "apt.png" },
        { name: "Розничная торговля", img: "market.png" },
        { name: "Предприятия общепита", img: "drink.png" },
        { name: "Транспортные средства", img: "bus.png" },
    ];

    return (
        <section className="prices content" id="pricing">
            <h2>Цены на наши услуги</h2>

            <div className="prices__list grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 md:gap-[10px] gap-[35px] flex-container">
                {pricingPlans.map((plan, index) => (
                    <div key={index} className="price min-w-full">
                        <div className="price__top">
                            <p className="price__title">{plan.title}</p>
                            <span className="price__action">
                                {plan.discount}
                            </span>
                        </div>

                        <ul className="price__table">
                            {plan.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="spacer_top">
                                    <span>{item.label}</span>
                                    <strong>{item.price}</strong>
                                </li>
                            ))}
                        </ul>

                        <div className="price__bottom">
                            <a
                                href="#contacts"
                                className="blue-btn !px-[10px] price__btn js-popup-link"
                                data-theme={plan.buttonTheme}
                            >
                                Заказать обработку
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="types spacer_top !flex items-center xl:flex-col">
                <p className="types__title">Работаем на всех типах объектов:</p>

                <div className="types__list !grid md:!grid-cols-2 sm:!grid-cols-1 !grid-cols-4 spacer_top">
                    {objectTypes.map((type, index) => (
                        <div key={index} className="type va-middle">
                            <span className="type__icon">
                                <Image
                                    src={`/icons/${type.img}`}
                                    width={28}
                                    height={28}
                                    className=" pos-center object-cover min-w-[28px] "
                                    alt="ss"
                                />
                            </span>
                            <p className="type__desc">{type.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;

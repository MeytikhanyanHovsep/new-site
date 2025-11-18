"use client";
import React, { useState } from "react";

function Contacts() {
    const [phone, setPhone] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Здесь будет логика отправки формы
        console.log("Отправка формы:", {
            phone,
            theme: "Зафиксировать скидку 25%",
        });
    };

    return (
        <section className="contacts">
            <div className="content spacer">
                <div className="contacts__left">
                    <p className="contacts__title">Зафиксировать скидку 25%</p>
                    <form
                        action="sendmessage.php"
                        className="contacts__form"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            name="theme"
                            className="hidden sf-hidden"
                            value="Зафиксировать скидку 25%"
                            readOnly
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
                            >
                                Расчитать
                            </button>
                        </div>
                    </form>
                    <div className="contact">
                        <p className="contact__title">
                            Выезд по Санкт-Петербургу и <br />
                            Ленинградской области
                        </p>
                        <a href="tel:+78129020290" className="contact__phone">
                            +7 (812) 902-02-90
                        </a>
                        <br />
                        <br />
                        Номер лицензии: 77.01.13.003.Л.000165.03.25 (ЕРУЛ №
                        Л064-00111-77/01975185)
                    </div>
                </div>
                <div id="map"></div>
            </div>
        </section>
    );
}

export default Contacts;

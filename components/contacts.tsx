"use client";
import React, { useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
function Contacts() {
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/send-to-telegram", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: "не указано", phone }),
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
        <section className="contacts" id="contacts">
            <div className="content spacer gap-[20px] lg:flex lg:flex-col">
                <div className="contacts__left lg:min-w-full">
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
                        <a href="tel:+78124071142" className="contact__phone">
                            +7 (812) 407-11-42
                        </a>
                        <br />
                        <br />
                        Номер лицензии: 77.01.13.003.Л.000165.03.25 (ЕРУЛ №
                        Л064-00111-77/01975185)
                    </div>
                </div>
                <div id="map" className="lg:min-w-full">
                    <YMaps>
                        <Map
                            defaultState={{
                                center: [59.9343, 30.3351],
                                zoom: 10,
                            }}
                            width="100%"
                            height="400px"
                        >
                            <Placemark geometry={[59.9343, 30.3351]} />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </section>
    );
}

export default Contacts;

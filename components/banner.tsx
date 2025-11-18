import React from "react";

type Props = {};

export default function Banner({}: Props) {
    return (
        <section className="app">
            <div className="content spacer">
                <div className="app__left">
                    <p className="app__title">
                        Сколько стоит обработка моего помещения?
                    </p>
                    <p className="app__desc">
                        Оставьте заявку и мы свяжемся с вами.
                    </p>
                </div>
                <form action="sendmessage.php" className="app__form spacer">
                    <input
                        type="text"
                        name="name"
                        className="form__field"
                        placeholder="Ваше имя"
                        required
                    />
                    <div className="form__field-wrap">
                        <input
                            type="text"
                            name="phone"
                            className="form__field"
                            placeholder="Ваш телефон"
                            required
                        />
                        <button className="yellow-btn form__btn">
                            Расчитать
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

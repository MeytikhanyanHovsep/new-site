"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Reviews = () => {
    const reviews = [
        {
            img: "user-1.jpg",
            name: "Евгения Фролова",
            place: "Санкт-Петербург",
            text: "В новой съемной квартире была проблема с тараканами. Когда я заметила первого таракана, я испугалась, но подумала, что это был случайный инцидент. Однако, когда я увидела их еще несколько, стало понятно, что приплыли... Различные инсектициды не давали результатов, решила обратиться за помощью к профессионалам и пока что дома ни единого замечено не было, спасибо) Рекоменду, они действительно могут помочь избавиться от проблемы, которая кажется неразрешимой.",
            likes: 65,
            images: {
                before: "https://спб.санэпидем.рф/images/reviews/review-1/tarak.jpg",
                after: "https://спб.санэпидем.рф/images/reviews/review-1/tarak2.jpg",
            },
        },
        {
            img: "user-2.jpg",
            name: "Александр Коротов",
            place: "Санкт-Петербург",
            text: "Не мог спать ночью из-за клопов, постоянный зуд и раздражение на коже, врагу не пожелаешь. Выкинул диван - не помогло! А тут по сути ребята приехали и за одну обработку всех потравили. Также дали мне рекомендации по тому, как правильно поддерживать чистоту в квартире, чтобы предотвратить повторную инфекцию.",
            likes: 28,
            images: {
                before: "https://спб.санэпидем.рф/images/reviews/review-1/klop.jpg",
            },
        },
        {
            img: "user-3.jpg",
            name: "Андрей Арчибасов",
            place: "Санкт-Петербург",
            text: "Столкнулся с грызунами в своем доме. Беспокоился о здоровье и безопасности моей семьи, поэтому даже не пытался решить проблему самостоятельно, только заштукатурил некоторые места, откуда могли лезти. Заказал услугу по обработке, по времени не слишком долго занимает. Очень доволен результатом, наконец-то могу чувствовать себя спокойно в своем доме, нет мышиных экскрементов по всюду, никто не прогрызает пакеты с едой, не сыпется утеплитель из щелей (мыши в нем норы делали).",
            likes: 83,
        },
        {
            img: "user-4.jpg",
            name: "Рустам",
            place: "Пушкин",
            text: "Весь участок кроты изрыли) Я пробовал разные методы - ловушки какие-то, отраву, но это не давало стабильных результатов. Поискал в интернете и вызвал спецов, всем рекомендую!",
            likes: 45,
        },
    ];

    const ratings = [
        { logo: "/sites/logo-1.png", stars: 3, rating: 4.8 },
        { logo: "/sites/logo-2.png", stars: 5, rating: 4.9 },
        { logo: "/sites/logo-3.png", stars: 4.5, rating: 4.9 },
    ];

    return (
        <section className="reviews content">
            <div className="reviews__block !pb-[50px]">
                <div className="reviews__top spacer">
                    <h2>
                        Отзывы наших <br />
                        клиентов
                    </h2>
                    <div className="ratings">
                        {ratings.map((rating, index) => (
                            <div key={index} className="rating">
                                <div className="rating__logo">
                                    <Image
                                        className="pos-center min-h-[28px] max-h-[29px] object-contain"
                                        src={rating.logo}
                                        alt="Лого"
                                        width={150}
                                        height={28}
                                    />
                                </div>
                                <div className="rating__info">
                                    <div className="rating__stars">
                                        {[...Array(5)].map((_, starIndex) => (
                                            <span
                                                key={starIndex}
                                                className={`rating__star ${
                                                    starIndex <
                                                    Math.floor(rating.stars)
                                                        ? "rating__star_full"
                                                        : starIndex <
                                                          rating.stars
                                                        ? "rating__star_half"
                                                        : ""
                                                }`}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                    <span className="rating__number">
                                        {rating.rating}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="reviews__slider">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={35}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        className="reviews__slides"
                    >
                        {reviews.map((review, index) => (
                            <SwiperSlide key={index}>
                                <div className="review">
                                    <div className="review__top va-middle">
                                        <div className="review__photo">
                                            <Image
                                                className="photo-full-size min-w-[68px] object-contain"
                                                src={"/users/" + review.img}
                                                width={68}
                                                height={68}
                                                alt="xx"
                                            />
                                        </div>
                                        <div className="review__right">
                                            <p className="review__name">
                                                {review.name}
                                            </p>
                                            <p className="review__place">
                                                {review.place}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="review__text">
                                        {review.text}
                                    </p>

                                    {review.images && (
                                        <div className="review__diffs">
                                            {review.images.before && (
                                                <div className="review__diff">
                                                    <p className="review__diff-title">
                                                        До:
                                                    </p>
                                                    <Image
                                                        unoptimized
                                                        src={
                                                            review.images.before
                                                        }
                                                        width={130}
                                                        height={108}
                                                        alt="review"
                                                        data-fancybox={`review-${index}`}
                                                        className=" !p-0 review__diff-photo photo-full-size"
                                                    />
                                                </div>
                                            )}
                                            {review.images.after && (
                                                <div className="review__diff">
                                                    <p className="review__diff-title">
                                                        После:
                                                    </p>
                                                    <Image
                                                        unoptimized
                                                        src={
                                                            review.images.after
                                                        }
                                                        width={130}
                                                        height={108}
                                                        alt="review"
                                                        data-fancybox={`review-${index}`}
                                                        className=" !p-0 review__diff-photo photo-full-size"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <a href="#" className="like">
                                        <span className="like__icon">♡</span>
                                        <span className="like__count">
                                            {review.likes}
                                        </span>
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Reviews;

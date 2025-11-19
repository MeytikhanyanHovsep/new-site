import React from "react";
import Image from "next/image";

const OurTeam = () => {
    const teamMembers = [
        {
            name: "Артур Султанов",
            position: "Дезинфектор, 12 лет стажа",
            photo: "/team/team-1.jpg",
        },
        {
            name: "Баранов Сергей",
            position: "Дезинсектор, 10 лет стажа",
            photo: "/team/team-2.jpg",
        },
        {
            name: "Семенюк Анатолий",
            position: "Специалист фумигации, 8 лет стажа",
            photo: "/team/team-3.jpg",
        },
        {
            name: "Кравченко Владимир",
            position: "Дератизация, 12 лет опыта",
            photo: "/team/team-4.jpg",
        },
    ];

    return (
        <section className="team content">
            <h2>Наша команда</h2>
            <p className="block-desc">Все специалисты аттестованы в НИИ</p>
            <div className="team__list flex-container md:grid-cols-2 sm:grid-cols-1 grid grid-cols-4 gap-[20px]">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team__item min-w-full">
                        <div className="team__item-photo sm:!max-h-[150px] max-h-[320px]">
                            <Image
                                width={265}
                                height={320}
                                className="photo-full-size w-full object-cover  rounded-[15px]"
                                src={member.photo}
                                alt={member.name}
                            />
                        </div>
                        <p className="team__item-name">{member.name}</p>
                        <p className="team__item-about">{member.position}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurTeam;

import React from "react";

const Reasons = () => {
    const reasons = [
        {
            title: "Бессонница",
            desc: "Некоторые вредители живут в кровати или рядом с ней и могут вызвать бессонницу",
            fullWidth: false,
        },
        {
            title: "Болезни",
            desc: "Большинство вредителей являются переносчиками заболеваний, опасных для человека",
            fullWidth: false,
        },
        {
            title: "Порча имущества",
            desc: "Грызуны, насекомые, плесень могут испортить Ваше имущество",
            fullWidth: true,
        },
    ];

    return (
        <section className="reasons content ">
            <div className="reasons__block bg-[#f8f8f8] rounded-[20px] bg-[url('/reasons-bg.jpg')] bg-cover bg-no-repeat bg-center md:!pb-[10px]">
                <div className="reasons__left  md:!pb-[20px] ">
                    <h2>
                        Что будет <br />
                        если затянуть обработку?
                    </h2>
                    <div className="reasons__list sm:!grid-cols-1 !grid !grid-cols-2 gap-[10px] spacer_top">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className={
                                    reason.fullWidth
                                        ? "reason reason_full-width"
                                        : "reason"
                                }
                            >
                                <p className="reason__title">{reason.title}</p>
                                <p className="reason__desc">{reason.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reasons;

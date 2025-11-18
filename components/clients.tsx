import React from "react";
import Image from "next/image";

type Props = {};

export default function Clients({}: Props) {
    return (
        <section className="clients content">
            <h2>35% клиентов приходят по рекомендации</h2>
            <div className="clients__list spacer">
                <div className="clients__logo">
                    <Image
                        src={`/clients/logo-1.png`}
                        width={200}
                        height={40}
                        className="w-full object-cover min-h-[40px]"
                        alt="client"
                    />
                </div>
                <div className="clients__logo">
                    <Image
                        src={`/clients/logo-2.png`}
                        width={200}
                        height={40}
                        className="w-full object-cover min-h-[40px]"
                        alt="client"
                    />
                </div>
                <div className="clients__logo">
                    <Image
                        src={`/clients/logo-3.png`}
                        width={200}
                        height={40}
                        className="w-full object-cover min-h-[40px]"
                        alt="client"
                    />
                </div>
                <div className="clients__logo">
                    <Image
                        src={`/clients/logo-4.png`}
                        width={200}
                        height={40}
                        className="w-full object-cover min-h-[40px]"
                        alt="client"
                    />
                </div>
                <div className="clients__logo">
                    <Image
                        src={`/clients/logo-5.png`}
                        width={200}
                        height={40}
                        className="w-full object-cover min-h-[40px]"
                        alt="client"
                    />
                </div>
            </div>
        </section>
    );
}

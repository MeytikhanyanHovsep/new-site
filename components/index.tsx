"use client";
import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

type Props = {
    children: ReactNode;
};

export default function Components({ children }: Props) {
    return (
        <>
            <section className="page-wrap montserrat">
                <Header />
                {children}
            </section>
            <Footer />
        </>
    );
}

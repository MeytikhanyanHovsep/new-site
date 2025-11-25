"use client";

import Script from "next/script";

export default function MangoWidget() {
    return (
        <Script
            id="mango-office-widget"
            src="//widgets.mango-office.ru/site/37045"
            strategy="afterInteractive"
        />
    );
}

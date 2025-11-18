import Main from "@/components/main";
import Advantages from "@/components/advantages";
import Pricing from "@/components/pricing";
import Reasons from "@/components/reasons";
import Works from "@/components/works";
import Banner from "@/components/banner";
import Clients from "@/components/clients";
import Reviews from "@/components/reviews";
import OurTeam from "@/components/ourTeam";
import Contacts from "@/components/contacts";

export default function Home() {
    return (
        <>
            <Main />
            <Advantages />
            <Pricing />
            <Reasons />
            <Works />
            <Banner />
            <Clients />
            <Reviews />
            <OurTeam />
            <Contacts />
        </>
    );
}

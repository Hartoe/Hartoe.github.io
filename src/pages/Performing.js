import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

export default function Performing() {
    return (
    <>
        <Navbar active="perform" />
        <Banner
            src="/images/banners/performing.png"
            title="Performing"
        />
        <Footer />         
    </>
    );
}
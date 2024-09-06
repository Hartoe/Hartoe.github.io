import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

export default function ContactMe() {
    return (
    <>
        <Navbar active="contact" />
        <Banner 
            src='/images/banners/contact.png'
            title='Contact Me'
        />
        <Footer />         
    </>
    );
}
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

export default function Writing() {
    return (
    <>
        <Navbar active="write" />
        <Banner 
            src='/images/banners/writing.png'
            title='Writing'
        />
        <Footer />         
    </>
    );
}
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Work from "../components/Work";
import { Carousel } from "react-bootstrap";

export default function Performing() {
    return (
    <>
        <Navbar active="perform" />
        <Banner
            src="/images/banners/performing.png"
            title="Performing"
        />
        <main>
            <div className="section outer">
                <h1 className="main__title">Showcase</h1>
                <h4 className="main__sub">Take a look at some photos of me in different roles.</h4>
                <Carousel slide prevLabel='' nextLabel=''>
                    <Carousel.Item>
                        <img className='carousel-image' src="/images/performing/carousel_1.png"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='carousel-image' src="/images/performing/carousel_2.png"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='carousel-image' src="/images/performing/carousel_3.png"/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <hr/>
            <div className="section outer">
                <h1 className="main__title">Previous Work</h1>
                <h4 className='main__sub'>Acting and theatre work I've done.</h4>
                <Work
                    title="Meisje en het Monster"
                    job="2014, Musical"
                    desc="Playing the role of Maurice in the childrens theatre version of Beauty and the Beast."
                />
                <Work
                    title="Kerstshow STGS"
                    job="2018, Christmas Show"
                    desc="Playing the role of a caroling villager in the christmas show for Stedelijk Gymnasium Schiedam."
                />
                <Work
                    title="Van Koningkrijk tot Sloppenwijk"
                    job="2023, Musical"
                    desc="Playing the role of Ambassador and Narrator in this retelling of the Prince and the Pauper."
                />
                <Work
                    title="Theatergroup Pardon"
                    job="2024, Theatre Show"
                    desc="Technician directing the light and sound in the theatre show Planet Femme."
                />
                <Work
                    title="Magical Party"
                    job="2024, Children Entertainment"
                    desc="Playing the role of Ollie the pirate at multiple public occasions for childrens entertainment."
                />
            </div>
        </main>
        <Footer />         
    </>
    );
}
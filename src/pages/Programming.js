import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

import Carousel from 'react-bootstrap/Carousel';

import '../styles/pages/Programming.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Work from "../components/Work";

export default function Programming() {
    return (
    <>
        <Navbar active="program" />
        <Banner
            src='/images/banners/programming.png'
            title='Programming'   
        />
        <main>
            <div className='showcase'>
                <h1 className='main__title'>Showcase</h1>
                <h4 className='main__sub'>Get a taste of my projects with the following showcase!</h4>
                <Carousel slide prevLabel='' nextLabel=''>
                    <Carousel.Item>
                        <a href="https://hartoehajek.itch.io/assimilate" target="blank">
                            <img className='carousel-image' src="/images/programming/carousel_1.png"/>
                            <Carousel.Caption>
                                <h3>Assimilate!</h3>
                                <p>Each cell you touch sticks to you! Can you assimilate all enemies before they get to you?</p>
                            </Carousel.Caption>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="https://hartoehajek.itch.io/dont-be-orange" target="blank">
                            <img className='carousel-image' src="/images/programming/carousel_2.png"/>
                            <Carousel.Caption>
                                <h3>Don't Be Orange</h3>
                                <p>There is only one rule: <it>do not</it> become orange!</p>
                            </Carousel.Caption>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="https://hartoehajek.itch.io/sokobeat" target="blank">
                            <img className='carousel-image' src="/images/programming/carousel_3.png"/>
                            <Carousel.Caption>
                                <h3>SokoBeat</h3>
                                <p>A rythmic twist on the classic sokoban puzzle game!</p>
                            </Carousel.Caption>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="https://hartoehajek.itch.io/station-command" target="blank">
                            <img className='carousel-image' src="/images/programming/carousel_4.png"/>
                            <Carousel.Caption>
                                <h3>Space Commander</h3>
                                <p>In space, each resource is precious...</p>
                            </Carousel.Caption>
                        </a>
                    </Carousel.Item>
                </Carousel>
            </div>
            <hr/>
            <div className='worklist'>
                <h1 className='main__title'>Previous Work</h1>
                <h4 className='main__sub'>Jobs and projects I've worked on before.</h4>
                <Work title="Saffron" job="Security Consultant" />
                <Work title="Ashira Creations" job="Website Development" />
                <Work title="TeamMeUp" job="Software Development" />
            </div>
            <hr/>
            <div className='projects'>
                <h1 className="main__title">Personal Projects</h1>
                <h4 className='main__sub'>Things I made for fun and training.</h4>
                <Work title='Assimilate!' job='Game Jam' />
                <Work title="Bat Zap" job='Game Jam' />
                <Work title="Don't Be Orange" job='Game' />
                <Work title='Home Sweet Home' job='Game Jam' />
                <Work title="My little puzzle game" job='Game Jam' />
                <Work title='SokoBeat' job='Game' />
                <Work title='Solo Shift' job='Game Jam' />
                <Work title='Space Commander' job='Game Jam' />
                <Work title='Time Heist' job='Game Jam' />
                <Work title='Wacky Herbalist' job='Game Jam' />
            </div>
        </main>
        <Footer />
    </>
    );
}
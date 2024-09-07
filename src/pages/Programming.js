import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

import Carousel from 'react-bootstrap/Carousel';

import '../styles/Carousel.css';
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
            <div className='section outer'>
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
            <div className='section'>
                <h1 className='main__title'>Previous Work</h1>
                <h4 className='main__sub'>Jobs and projects I've worked on before.</h4>
                <Work
                    title="Saffron"
                    job="2021 - 2022, Security Consultant"
                    desc="Facilitate the comunication between the development team and the financial and marketing team of a Pen Tester."
                />
                <Work
                    title="TeamMeUp"
                    job="2023, Software Development"
                    desc="Help develop a prototype for a smart tool for grouping people for a professor at Utrecht University."
                />
                <Work
                    title="Ashira Creations"
                    job="2024, Website Development"
                    desc="Design and develop a website for Ashira Creations."
                />
            </div>
            <hr/>
            <div className='section outer'>
                <h1 className="main__title">Personal Projects</h1>
                <h4 className='main__sub'>Things I made for fun and training.</h4>
                <Work
                    title="Bat Zap"
                    job='2019, Game Jam'
                    desc="On-rails FPS with classical wolfenstein graphics. Made for the Skilldev Jam."
                />
                <Work
                    title="Don't Be Orange"
                    job='2020, Game'
                    desc="Arcade bullet hell game where you have to dodge the red particles slowly making your yellow player orange."
                />
                <Work
                    title='Solo Shift'
                    job='2020, Game Jam'
                    desc="Frantic 'Overcooked' style game where you have to take care of more and more patients. Made for the 6th Extra Credits Jam"
                />
                <Work
                    title='Time Heist'
                    job='2020, Game Jam'
                    desc='Time looping topdown shooter where you have to perfect your speedrun. Made for VimJam: Collectables.'
                />
                <Work
                    title='Assimilate!'
                    job='2021, Game Jam'
                    desc="Bullet hell where you can touch enemies to assimilate them, if you can get close enough... Made for the 18th CurdleJam."
                />
                <Work
                    title='Home Sweet Home'
                    job='2021, Game Jam'
                    desc="Text-based horror adventure game. Can you figure out what happened last night? Made for the 2nd Text Only Jam."
                />
                <Work
                    title="My little puzzle game"
                    job='2021, Game Jam'
                    desc="Just your average puzzle game...except that corporate keeps changing the scope of the game! Made for VimJam: Boss."
                />
                <Work
                    title='SokoBeat'
                    job='2021, Game'
                    desc="A rhythmic take on the classic Sokoban puzzle game. Think on your feet, cause they move on the beat!"
                />
                <Work
                    title='Space Commander'
                    job='2021, Game Jam'
                    desc="A resource manager where each choice has unforseen concequences down the line. Made for the HKU Jam: Instant Regret."
                />
                <Work
                    title='Wacky Herbalist'
                    job='2021, Game Jam'
                    desc='An arcade game where you use randomly generated plants to brew potions. Made for the HKU Jam: The Unknown.'
                />
            </div>
        </main>
        <Footer />
    </>
    );
}
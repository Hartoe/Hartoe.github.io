import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HoverImage from "../components/HoverImage";
import StarRating from "../components/StarRating";
import {Link} from 'react-router-dom';
import "../styles/Homepage.css";

export default function Homepage() {

    return (
        <>
            <Navbar active="home"/>
            <main>
                <div className="parallax">
                    <div className="parallax__overlay">
                        <h1>Artur Salek</h1>
                        <h4>Programmer, Actor, Writer, and General Creative.</h4>
                        <button onClick={() => document.querySelector('#about-me').scrollIntoView()}>Learn More</button>
                    </div>
                </div>
                <div className="about" id="about-me">
                    <h1 className='main__title'>About Me</h1>
                    <h4 className='main__sub'>Creative and diligent student, efficient and competent programmer, and enthusiastic and fun
                    teammate.</h4>
                    <p className='about__blurb'>
                        Ever since I was a child, I was interested in the experiences that stories and games could bring us.
                        Because of this, I quickly started working to make my stories. That is when I found my love for programming.
                        An endless puzzle with countless solution, in which you can always improve and optimize <span style={{fontStyle: "italic"}}>something</span>.
                        My enthusiasm and passion for programming has only grown since I started at twelve. I am a driven and
                        solution oriented programmer, who isn't afraid to think out of the box. I love approaching a problem
                        creatively and viewing it from every side possible. I have a large feeling of responsibility towards my
                        projects, which makes me determined to always strive for the best possible product. My family background
                        in theatre has also pushed me to explore a more expressive side of my creativity. This has made me a quite
                        talkative and social person. I love a good challenge and often take initiative to tackle them from a new angle.
                    </p>
                </div>
                <hr/>
                <div className="hovers">
                    <h1 className="main__title">What I Do</h1>
                    <h4 className="main__sub">Click to read more about my projects and experiences.</h4>
                    <Link to="Programming"><HoverImage
                        src="/images/programming.png"
                        alt="Programming"
                        hover={<>
                            <h3>Programming</h3>
                            <p>
                                From websites to game jams, with some conlang tools thrown in between.
                            </p>
                        </>}
                    /></Link>
                    <Link to="Performing"><HoverImage
                        src="/images/performing.png"
                        alt="Performing"
                        hover={<>
                            <h3>Performing</h3>
                            <p>
                                Wanna see what I've done on stage before? Come see the many faces I have put on!
                            </p>
                        </>}
                    /></Link>
                    <Link to="Writing"><HoverImage
                        src="/images/writing.png"
                        alt="Writing"
                        hover={<>
                            <h3>Writing</h3>
                            <p>
                                Come read some prose with a focus on fairytales and fantasy...
                            </p>
                        </>}
                    /></Link>
                </div>
                <hr/>
                <div className='cv'>
                    <h1 className='main__title'>Experiences</h1>
                    <h4 className='main__sub'>Find out what I am capable of!</h4>
                    <div className='cv__content'>
                        <div className="cv__education">
                            <h2>Education</h2>
                            <div className='cv__education__item'>
                                <h4>VWO, Stedelijk Gymnasium Schiedam</h4>
                                <span className='education__date'>(August 2013 - June 2019)</span>
                                <span className='education__info'>Graduated (N&G profile)</span>
                            </div>
                            <div className='cv__education__item'>
                                <h4>Bachelor Game Technology, Utrecht University</h4>
                                <span className='education__date'>(Augustus 2019 - June 2023)</span>
                                <span className='education__info'>Graduated</span>
                            </div>
                            <div className='cv__education__item'>
                                <h4>Minor Game Design, Hogeschool voor de Kunsten Utrecht</h4>
                                <span className='education__date'>(September 2021 - January 2022)</span>
                                <span className='education__info'>Certified</span>
                            </div>
                            <div className='cv__education__item'>
                                <h4>Masters Game & Media Technology, Utrecht University</h4>
                                <span className='education__date'>(August 2023 - Present)</span>
                                <span className='education__info'>Ongoing</span>
                            </div>
                        </div>
                        <div className="cv__sidebar">
                            <div className="cv__language">
                                <h2>Languages</h2>
                                <li><b>Dutch:</b> Native</li>
                                <li><b>English:</b> C2</li>
                                <li><b>Polish:</b> A1</li>
                            </div>
                            <div className='cv__programming'>
                                <h2>Programming Experience</h2>
                                <li><b>C#</b><StarRating rate='3' /></li>
                                <li><b>.NET Framework</b><StarRating rate='3' /></li>
                                <li><b>Python</b><StarRating rate='3' /></li>
                                <li><b>JavaScript</b><StarRating rate='2' /></li>
                                <li><b>React</b><StarRating rate='2' /></li>
                                <li><b>C++</b><StarRating rate='2' /></li>
                                <li><b>Haskell</b><StarRating rate='1' /></li>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
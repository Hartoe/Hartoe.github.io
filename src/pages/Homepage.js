import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HoverImage from "../components/HoverImage";
import "../styles/Homepage.css";

export default function Homepage() {

    return (
        <>
            <Navbar active="home"/>
            <main>
                <div class="parallax">
                    <div class="parallax__overlay">
                        <h1>Artur Salek</h1>
                        <h4>Programmer, Actor, Writer, and General Creative.</h4>
                        <a href="#about-me"><button>Learn More</button></a>
                    </div>
                </div>
                <about class="about" id="about-me">
                    <h1>About Me</h1>
                    <h4>Creatieve en ijverige student, efficiënte en competente programmeur, en enthousiaste en gezellige
                    teamgenoot.</h4>
                    <p>Al sinds ik kind was, was ik geïnteresseerd in de ervaringen die verhalen en spellen ons kunnen geven. Hierdoor
ben ik snel aan de slag gegaan om mijn eigen spellen te maken. Dat is wanneer ik mijn liefde voor programmeren
heb ontdekt. Een eeuwige puzzel met talloze oplossingen, waarbij je altijd wel iets kan verbeteren en
optimaliseren. Mijn enthousiasme en passie voor programmeren is alleen maar groter geworden sinds ik begon
op mijn twaalfde. Ik ben een gedreven en oplossingsgerichte programmeur die niet bang is om out of the box te
denken. Ik hou ervan om creatief met een probleem om te gaan en het van alle kanten te bekijken. Ik heb een
groot verantwoordelijkheidsgevoel, waardoor ik toegewijd ben om altijd het best mogelijke product te maken.
Door mijn familie achtergrond in theater ben ik ook zeer sociaal ingesteld en een makkelijke prater. Ik neem veel
initiatief en hou ervan om een uitdaging aan te gaan.</p>
                </about>
                <hovers>
                    <a href="Programming"><HoverImage
                        src="http://via.placeholder.com/300"
                        alt="Programming"
                        hover={<h1>Programming</h1>}
                    /></a>
                    <a href="Performing"><HoverImage
                        src="http://via.placeholder.com/300"
                        alt="Performing"
                        hover={<h1>Performing</h1>}
                    /></a>
                    <a href="Writing"><HoverImage
                        src="http://via.placeholder.com/300"
                        alt="Writing"
                        hover={<h1>Writing</h1>}
                    /></a>
                </hovers>
            </main>
            <Footer />
        </>
    );
}
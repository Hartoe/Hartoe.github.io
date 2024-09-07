import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Work from "../components/Work";
import { Carousel } from "react-bootstrap";

export default function Writing() {
    return (
    <>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
        </style>
        <Navbar active="write" />
        <Banner 
            src='/images/banners/writing.png'
            title='Writing'
        />
        <main>
            <div className="section outer">
                <h1 className='main__title'>Showcase</h1>
                <h4 className='main__sub'>Read a few snippets from my notebooks.</h4>
                <Carousel slide prevLabel='' nextLabel=''>
                    <Carousel.Item>
                        <Carousel.Caption className="text-only">
                            <h2>Lines in the sand</h2>
                            <p>
                                Walking down the beach, stick in hand, slowly drawing lines in the sand.<br/>
                                How many remain, who can say?<br/>
                                No one knows when they wash away.<br/>
                                <br/>
                                There have been many before to walk this path, but no more.<br/>
                                Lines that waned, that have faded, not a clue who once had made it.<br/>
                                <br/>
                                Then suddenly in my view I had found you!<br/>
                                Stick in hand, just moving through.<br/>
                                Thus for now we walk as two.<br/>
                                <br/>
                                While wandering I felt lost, until our lines and path did cross.<br/>
                                Parallel, swirling, and entwined!<br/>
                                Perplexed by beauty, I would find the lines twisted, weaving our fate.<br/>
                                The days feeling golden, long, and great.<br/>
                                <br/>
                                But how long will our lines still stay?<br/>
                                Eons, years, or just a day?<br/>
                                <br/>
                                For certain are the tides of time to rise and wash away our lines.<br/>
                                And as time passed, the beach forgot it.<br/>
                                But I'll always cherish when our lines were knotted.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption className="text-only">
                            <h2>Adventures in Archon</h2>
                            <p>
                                “It can't be!” the wizard yelled.
                                “All manner of producing a soul anchor has been lost to time many centuries ago.”
                                The barbarian shrugged, pushing the stone into the wizards chest. “I'm telling ya'
                                me tribe had a glowy stone just like this one 'un it holds a soul.” They stared at
                                the stone hoping for some clarification. After a brief moment of silence, the wizards
                                intrigue slowly faded into visible concern. “If this truly is a soul anchor, what
                                manner of soul is it anchoring to our plane?” Before the adventurers could continue
                                their conversation, a great toothy maw appeared in the shadows behind them.
                            </p>
                            <span style={{fontFamily: "Shadows Into Light", fontWeight: 400, fontSize: 18}}>
                                “I wonder who…“
                            </span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption className="text-only">
                            <h2>The Hermit</h2>
                            <p>
                                Long ago, in a dark and musty moor, there lived an old hermit.
                                But this wasn't just any normal hermit. This hermit was known for
                                his magical remedies, which could cure most anything! The problem was
                                the hermit lived so remote, so far within the moor, that no one knew
                                where to find this hermit. But one thing was for sure: <i>if</i> you
                                could find him, he could cure whatever was ailing you. Intrigued by this
                                prospect, a young farmers boy named Jayce dreamt of meeting this old hermit.
                                For Jayce had quite a problem! Since his childhood, a nasty little demon
                                had chained himself around the neck of the poor farmers boy, heaving its lumpy
                                body down on the child. As the boy aged, so did the demon. Shifting and
                                growing to fit around the boy's changing body. Tired of the demon's weight,
                                Jayce decided to make the perilous trek through the moor to find the hermit
                                in the hope he could help him remove the demon once and for all...
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <hr/>
            <div className="section">
                <h1 className='main__title'>Personal Projects</h1>
                <h4 className='main__sub'>What I'm currently writing on</h4>
                <Work 
                    title="Lines and Crosses"
                    job="Poetry Bundle"
                    desc='A poetry bundle about the comings and goings in life, concerning the different kinds of hellos and goodbyes.'
                />
                <Work
                    title="Fae Fables & Fairytales"
                    job="Fairytale Collection"
                    desc="A collection of original fairytales with a more rustic feel. Made for reading before bedtime."
                />
                <Work
                    title="The Chronicles of Sybil"
                    job="Fantasy Novel"
                    desc='A fantasy novel that follows the story of Sybil, an ordinary farmers girl in a fantastical world.'
                />
                <Work
                    title="Eldar Speech"
                    job="Con Langs"
                    desc='A collection of different constructed languages made for worldbuilding and dungeons & dragons.'
                />
                <Work
                    title="The World of Archon"
                    job="Worldbuilding"
                    desc='A codex and atlas of the world of Archon, the world in which both my book and dungeons & dragons campaing is set.'
                />
            </div>
        </main>
        <Footer />         
    </>
    );
}
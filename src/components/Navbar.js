import "../styles/Navbar.css";

export default function Navbar ({ active }) {
    
    let home = <a class="navbar__button" href="/">Home</a>;
    let program = <a class="navbar__button" href="Programming">Programming</a>;
    let perform = <a class="navbar__button" href="Performing">Performing</a>;
    let write = <a class="navbar__button" href="Writing">Writing</a>;
    let contact = <a class="navbar__button" href="Contact">Contact Me</a>;

    switch(active) {
        case 'home':
            home = <a class="navbar__button active" href="/">Home</a>;
            break;
        case 'program':
            program = <a class="navbar__button active" href="Programming">Programming</a>;
            break;
        case 'perform':
            perform = <a class="navbar__button active" href="Performing">Performing</a>;
            break;
        case 'write':
            write = <a class="navbar__button active" href="Writing">Writing</a>;
            break;
        case 'contact':
            contact = <a class="navbar__button active" href="Contact">Contact Me</a>;
            break;
        default:
            home = <a class="navbar__button active" href="/">Home</a>;
            break;
    }

    return (
        <div class='navbar'>
            <img class='navbar__logo' src='/images/logo/logo192.png' alt='Artur Salek'/>
            {home}
            {program}
            {perform}
            {write}
            {contact}
        </div>
    );
}
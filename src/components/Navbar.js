import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faComputer, faFeather, faMusic, faEnvelope, faM } from '@fortawesome/free-solid-svg-icons';
import "../styles/Navbar.css";
import {Link} from 'react-router-dom';

export default function Navbar ({ active }) {
    
    let home = <Link className={active === 'home' ? 'navbar__button active' : 'navbar__button'} to="/"><FontAwesomeIcon icon={faHouse} /><span>Home</span></Link>;
    let program = <Link className={active === 'program' ? 'navbar__button active' : 'navbar__button'} to="/Programming"><FontAwesomeIcon icon={faComputer} /><span>Programming</span></Link>;
    let perform = <Link className={active === 'perform' ? 'navbar__button active' : 'navbar__button'} to="/Performing"><FontAwesomeIcon icon={faMusic} /><span>Performing</span></Link>;
    let write = <Link className={active === 'write' ? 'navbar__button active' : 'navbar__button'} to="/Writing"><FontAwesomeIcon icon={faFeather} /><span>Writing</span></Link>;
    let contact = <Link className={active === 'contact' ? 'navbar__button active' : 'navbar__button'} to="/Contact"><FontAwesomeIcon icon={faEnvelope} /><span>Contact Me</span></Link>;

    return (
        <div className='navbar'>
            <img className='navbar__logo' src='/images/logo/logo192.png' alt='Artur Salek'/>
            {home}
            {program}
            {perform}
            {write}
            {contact}
        </div>
    );
}
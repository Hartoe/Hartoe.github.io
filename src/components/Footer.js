import "../styles/Footer.css";
import Email from "./Email";
import Phone from "./Phone";

export default function Footer() {
    return (
    <div className='footer'>
        <p>&copy; 2024 Artur Salek | <Phone /> | <Email /> </p>
    </div>
    );
}
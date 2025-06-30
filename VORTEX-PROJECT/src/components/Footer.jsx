import { Link, Outlet } from 'react-router-dom';
import "../styles/redirection.css";

const Footer = () => {
    return (
        <>
            <footer>
                <p className="footerText">©COPYRIGHT VORTEX</p>
                {/* <p><Link to='/contact'>CONTACT | HELP</Link></p> */}
            </footer>
        </>
    );
};

export default Footer;

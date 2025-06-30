import { Link, Outlet } from 'react-router-dom';
import "../styles/redirection.css";
import navLogo from '../assets/images/6b25bec03e3ccde2e7dc1a3a1e01b402.jpg'; // ✅ import the image

const Nav = () => {
    return (
        <>
            <nav>
                <img src={navLogo} alt="Logo" />
                <ul>
                    <li><Link to='/home'>HOME</Link></li>
                    <li><Link to='/profile'>PROFILE</Link></li>
                    <li><Link to='/cart'>CART</Link></li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default Nav;

import { Link, Outlet } from 'react-router-dom';
import "../styles/redirection.css";
import navLogo from '../assets/images/6b25bec03e3ccde2e7dc1a3a1e01b402.jpg';
import cartLogo from '../assets/images/cart.png'
import userLogo from '../assets/images/user.png'

const Nav = () => {
    return (
        <>
            <nav>
                <img src={navLogo} alt="Logo" />
                <ul>
                    <li><Link to='/home'>HOME</Link></li>
                    <li><Link to='/profile'><img src={userLogo} alt="Logo" /></Link></li>
                    <li><Link to='/cart'><img src={cartLogo} alt="Logo" /></Link></li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default Nav;

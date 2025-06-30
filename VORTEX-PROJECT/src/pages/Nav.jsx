import { Link, Outlet } from 'react-router-dom'
import "../styles/redirection.css";

const Nav = () => {
    return (
        <>
            <nav className="navbar">
                <ul>
                    <li><Link to='/home'>HOME</Link></li>
                    <li><Link to='/profile'>PROFILE</Link></li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
}

export default Nav;
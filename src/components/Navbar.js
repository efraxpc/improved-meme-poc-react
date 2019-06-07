import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../images/icono-video.png';

class Navbar extends React.Component {
    render() {
        return (
            <header className={'header__container'}>
                <div>

                <Link className="Navbar__brand" to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                </div>

            </header>
        );
    }
}

export default Navbar;

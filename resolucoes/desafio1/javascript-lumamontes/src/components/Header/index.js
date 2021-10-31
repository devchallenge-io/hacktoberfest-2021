import "./styles.css";
import { GiPopcorn } from 'react-icons/gi';
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

export default function Header() {
    return (
        <div >
            <header className="movie-header">
                <div className="header-logo">
                    <h1 className="main-color">Cine<span className="secondary-color">Imperator</span></h1> <GiPopcorn />
                </div>
                <nav className="nav-link">
                    <a href="/">
                        <FaTwitter />
                    </a>
                    <a href="/">
                        <FaYoutube />
                    </a>
                    <a href="/">
                        <FaInstagram />
                    </a>
                    <a href="/">
                        <FaFacebook />
                    </a>
                </nav>
            </header>
        </div>
    );
}
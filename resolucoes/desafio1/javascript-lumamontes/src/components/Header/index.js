import "./styles.css";
import { GiPopcorn } from 'react-icons/gi';
import { FaTwitter } from 'react-icons/fa';

export default function Header() {
    return (
        <div >
            <header >
                <h1>Cine<span>Imperator</span></h1> <GiPopcorn />
                <nav >
                    <a href="/">
                        <p>Sobre</p>
                    </a>
                    <a href="/">
                        <p>Anunciar imovél</p>
                    </a>
                    <a href="/">
                        <FaTwitter />
                    </a>
                    <a href="/">
                        <p>Entrar</p>
                    </a>
                </nav>
            </header>
        </div>
    );
}
import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
    return(
        <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>MVAvaliator</h1>
                <a href="https://github.com/lucasoalima/" target="_blank" rel="noreferrer">
                    <div className="dsmovie-contact-container">
                        <GithubIcon/>
                        <p className="dsmovie-contact-link">/lucasoalima</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    );

}

export default Navbar;
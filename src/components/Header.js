import logoImage from "../images/header-logo.svg";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header className="header">
            <a href="#" className="header__link">
                <img src={logoImage} alt="Логотип сайта" className="header__logo"/>
            </a>
            {props.children}
            <a href="#" className="header__link">
                <h2 className={`header__registration-link ${props.nameClass}`}>{`${props.link}`}</h2>
            </a>
        </header>
    )
}

export default Header;
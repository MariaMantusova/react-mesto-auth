import logoImage from "../images/header-logo.svg";
import {Link} from "react-router-dom";
import Menu from "./Menu";

function Header(props) {
    return (
        <header className="header">
            <a href="#" className="header__link">
                <img src={logoImage} alt="Логотип сайта" className="header__logo"/>
            </a>
            <div className="header__links-container">
                {props.children}
                <a href="#" className="header__link">
                    <h2 className={`header__registration-link ${props.nameClass}`}>{`${props.link}`}</h2>
                </a>
            </div>
            <Menu />
        </header>
    )
}

export default Header;
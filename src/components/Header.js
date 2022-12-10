import logoImage from "../images/header-logo.svg";
import {Link} from "react-router-dom";
import Menu from "./Menu";
import {BiMenu} from "react-icons/bi"
import React from "react";

function Header(props) {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Menu opened={open} />
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
                <BiMenu onClick={() => {
                    setOpen(!open)
                }} className="burger"/>
            </header>
        </>
    )
}

export default Header;
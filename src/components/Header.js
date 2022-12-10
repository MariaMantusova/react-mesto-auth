import logoImage from "../images/header-logo.svg";
import Menu from "./Menu";
import {BiMenu} from "react-icons/bi";
import React from "react";
import {MdClose} from "react-icons/md";

function Header(props) {
    const [open, setOpen] = React.useState(false);
    const burger = <BiMenu onClick={() => { setOpen(!open) }} className="burger"/>
    const closeBurger = <MdClose onClick={() => { setOpen(!open) }} className="burger"/>

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
                {open ? closeBurger : burger}
            </header>
        </>
    )
}

export default Header;
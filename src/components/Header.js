import logoImage from "../images/header-logo.svg";
import Menu from "./Menu";
import {BiMenu} from "react-icons/bi";
import React from "react";
import {Link} from "react-router-dom";
import {MdClose} from "react-icons/md";

function Header(props) {
    const [open, setOpen] = React.useState(false);
    const burger = <BiMenu onClick={() => { setOpen(!open) }} className="burger"/>
    const closeBurger = <MdClose onClick={() => { setOpen(!open) }} className="burger"/>

    const closeMenu = () => {setOpen(false)}

    function logOut() {
        if (`${props.link}` === "Выйти") {
            localStorage.removeItem('jwt');
        }
    }

    return (
        <>
            <Menu opened={open} closeMenu={closeMenu} />
            <header className="header">
                <a href="#" className="header__link">
                    <img src={logoImage} alt="Логотип сайта" className="header__logo"/>
                </a>
                <nav className="header__links-container">
                    {props.children}
                    <Link to={props.path} className="header__link" onClick={logOut}>
                        <h2 className={`header__registration-link ${props.nameClass}`}>{`${props.link}`}</h2>
                    </Link>
                </nav>
                {open ? closeBurger : burger}
            </header>
        </>
    )
}

export default Header;
import React from "react";
import {Link} from "react-router-dom";

function Menu(props) {
    return (
        <>
            {props.opened && <ul className="burger-links">
                <li className="burger__email" onClick={props.closeMenu}>email</li>
                <li className="burger__link" onClick={props.closeMenu}>
                    <Link className="burger__link">
                        Выйти
                    </Link>
                </li>
            </ul>}
        </>
    )
}

export default Menu;
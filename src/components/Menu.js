import React from "react";
import {Link} from "react-router-dom";

function Menu(props) {
    return (
        <>
            {props.opened && <ul className="burger-links">
                <li className="burger__email">email</li>
                <li className="burger__link">
                    <Link className="burger__link">
                        Выйти
                    </Link>
                </li>
            </ul>}
        </>
    )
}

export default Menu;
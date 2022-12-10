import React from "react";
import {Link} from "react-router-dom";
import {BiMenu} from "react-icons/bi"

function Menu() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <BiMenu onClick={() => {setOpen(!open)}} className="burger"/>
            {open && <ul className="burger-links">
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
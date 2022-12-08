import React from "react";

function SigningForm(props) {
    return(
        <section className="signing">
            <h1 className="signing__title">{`${props.title}`}</h1>
            <form className="signing__Form">
                <input className="signing__input" type="email" placeholder="Email" required/>
                <input className="signing__input" type="password" placeholder="Пароль" minLength="8" required/>
                <button className="signing__button">{`${props.buutonText}`}</button>
            </form>
            {props.children}
        </section>
    )
}

export default SigningForm;
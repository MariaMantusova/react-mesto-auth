import React from "react";
import Header from "./Header";
import SigningForm from "./SigningForm";
import {Link} from "react-router-dom";

function Register() {
    return (
        <>
            <Header link="Войти" path="sign-in" />
            <SigningForm title="Регистрация" buttonText="Зарегистрироваться">
                <Link to="sign-in" className="signing__link signing__link_registration">Уже зарегистрированы? Войти</Link>
            </SigningForm>
        </>
    )
}

export default Register;

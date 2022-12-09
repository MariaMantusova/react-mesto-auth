import React from "react";
import Header from "./Header";
import SigningForm from "./SigningForm";

function Register() {
    return (
        <>
            <Header link="Войти"/>
            <SigningForm title="Регистрация" buutonText="Зарегистрироваться">
                <a className="signing__link">Уже зарегистрированы? Войти</a>
            </SigningForm>
        </>
    )
}

export default Register;

import React from "react";
import Header from "./Header";
import SigningForm from "./SigningForm";

function Login() {
    return (
        <>
            <Header link="Регистрция" path="/sign-in"/>
            <SigningForm title="Вход" buutonText="Войти"/>
        </>
    )
}

export default Login;
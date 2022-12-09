import React from "react";
import Header from "./Header";
import SigningForm from "./SigningForm";

function Login() {
    return (
        <>
            <Header link="Регистрация"/>
            <SigningForm title="Вход" buutonText="Войти"/>
        </>
    )
}

export default Login;
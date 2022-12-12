import React from "react";
import Header from "./Header";
import SigningForm from "./SigningForm";

function Login() {
    return (
        <>
            <Header link="Регистрация" path="/sign-up"/>
            <SigningForm title="Вход" buttonText="Войти"/>
        </>
    )
}

export default Login;
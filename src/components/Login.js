import React from "react";
import Header from "./Header";

function Login() {

    const [data, setData] = React.useState({
        email: "",
        password: ""
    });

    function handleChange(evt) {
        const {name, value} = evt.target;
        setData({
            ...data,
            [name]: value,
        })
    }

    return (
        <>
            <Header link="Регистрация" path="/sign-up"/>
            <section className="signing">
                <h1 className="signing__title">Вход</h1>
                <form className="signing__form">
                    <input className="signing__input" type="email" placeholder="Email" name="email"
                           value={data.email || ""} onChange={handleChange} required/>
                    <input className="signing__input" type="password" name="password" placeholder="Пароль" minLength="8"
                           value={data.password || ""} onChange={handleChange}  required/>
                    <button className="signing__button">Войти</button>
                </form>
            </section>
        </>
    )
}

export default Login;
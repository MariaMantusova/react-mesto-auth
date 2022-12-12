import React from "react";
import Header from "./Header";
import {Link} from "react-router-dom";

function Register() {
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

    const handleSubmit = (evt) => {
        evt.preventDefault();
    }

    return (
        <>
            <Header link="Войти" path="/sign-in" passwordValue={data.password} emailValue={data.email} changing={handleChange} />
            <section className="signing">
                <h1 className="signing__title">Регистрация</h1>
                <form className="signing__form">
                    <input className="signing__input" type="email" placeholder="Email" name="email"
                           value={data.email || ""} onChange={handleChange} required/>
                    <input className="signing__input" type="password" name="password" placeholder="Пароль" minLength="8"
                           value={data.password || ""} onChange={handleChange}  required/>
                    <button className="signing__button">Зарегистрироваться</button>
                </form>
                <Link to="/sign-in" className="signing__link signing__link_registration">Уже зарегистрированы? Войти</Link>
            </section>
        </>
    )
}

export default Register;

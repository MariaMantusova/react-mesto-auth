import React from "react";
import Header from "./Header";
import {Link, useHistory} from "react-router-dom";
import {authApi} from "../utils/authApi";
import InfoTooltip from "./InfoTooltip";

function Register() {
    const [data, setData] = React.useState({
        email: "",
        password: ""
    });

    const history = useHistory();

    function handleChange(evt) {
        const {name, value} = evt.target;
        setData({
            ...data,
            [name]: value,
        })
    }

    // function openInfo(res) {
    //     if (res.statusCode.startsWith('2')) {
    //         <InfoTooltip className="info-tooltip__image_success" caption="Вы успешно зарегистрировались!"/>
    //     } else {
    //         <InfoTooltip className="info-tooltip__image_fail" caption="Что-то пошло не так! Попробуйте ещё раз."/>
    //     }
    // }

    function handleSubmit(evt) {
        evt.preventDefault();

        let {email, password} = data;
        authApi.registerUser(password, email)
            .then((res) => {
                if (res.statusCode !== 400) {
                    setData({
                        ...data
                    });
                    history.push("/sign-in")
                } else {
                    setData({
                        ...data
                    })
                }
            })
            .catch((err) => console.log(err))
            // .finally((res) => {
            //     openInfo(res)
            // })

    }

    return (
        <>
            <Header link="Войти" path="/sign-in" passwordValue={data.password} emailValue={data.email} changing={handleChange} />
            <section className="signing">
                <h1 className="signing__title">Регистрация</h1>
                <form className="signing__form" onSubmit={handleSubmit}>
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

import React from "react";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import Header from "./Header";
import Footer from "./Footer";

function Main(props) {
    const userInfo = React.useContext(CurrentUserContext);

    function likedCard(card) {
        props.onLike(card, userInfo)
    }

    return (
        <>
            <Header link="Выйти" nameClass="header__registration-link_main" path="/sign-in">
                <a className="header__registration-link header__registration-link_email">{`${props.email}`}</a>
            </Header>
            <main className="main">
                <section className="profile">
                    <div className="profile__photo-container" onClick={props.onEditAvatar}>
                        <img alt="Фото профиля" className="profile__photo" src={userInfo.avatar}/>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">{userInfo.name}</h1>
                        <p className="profile__description">{userInfo.about}</p>
                        <button aria-label="изменить" type="button" className="profile__edit-button"
                                onClick={props.onEditProfile}></button>
                    </div>
                    <button aria-label="добавить" type="button" className="profile__add-button"
                            onClick={props.onAddPlace}></button>
                </section>
                <section className="cards">
                    {props.cards.map((card) => (
                        <Card card={card} key={card._id} onCardClick={props.onCardClick} onCardLike={likedCard}
                              onCardDelete={props.onDelete}/>
                    ))}
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Main;
import React from "react";

function InfoTooltip(props) {
    return(
        <div className="info-tooltip">
            <button type="button" className="popup__button-close"></button>
            <div className="info-tooltip__image info-tooltip__image_fail"></div>
            <h2 className="info-tooltip__caption">{`${props.caption}`}</h2>
        </div>
    )
}

export default InfoTooltip;

// {`popup ${props.isOpen ? 'popup_opened' : ''}`}
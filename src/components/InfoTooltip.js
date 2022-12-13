import React from "react";

function InfoTooltip(props) {
    return(
        <div className={`info-tooltip ${props.isOpen ? 'info-tooltip_opened' : ''}`}>
            <button type="button" className="popup__button-close"></button>
            <div className={`info-tooltip__image ${props.className}`}></div>
            <h2 className="info-tooltip__caption">{`${props.caption}`}</h2>
        </div>
    )
}

export default InfoTooltip;
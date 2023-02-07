import React, { useState } from "react";
import './Read.css';


const Popup = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                {props.content}
            </div>
        </div>
    );
};


function Read(props) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return <div>
        <input
            type="button"
            value="Read"
            onClick={togglePopup}
        />
        {isOpen && <Popup
            content={<>
                
                <p>{props.name}</p>
            </>}
            handleClose={togglePopup}
        />}
    </div>
}

export default Read;
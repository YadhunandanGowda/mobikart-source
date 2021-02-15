import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import './style.scss';

class Custompopup extends React.Component {
    constructor(props) {
        super(props);
        this.closePopup = this.closePopup.bind(this);
    }
    

    closePopup (){
        document.getElementById("customPopup").classList.remove("show")
        // document.querySelectorAll(".customPopup")[0].classList.remove("show");
    }

    render() {
        return (
            <div className="customPopup" id="customPopup">
            <div className="popupContainer">
                <div className="exitBtn"  onClick={()=>{this.closePopup()}}><i><FontAwesomeIcon icon={faTimes}/></i></div>
                <div className="popMessageBox">
                    <div className="messageContent" id="message">
                        Total Price : 5,999
                    </div>
                    <button className="popupOkBtn" onClick={()=>{this.closePopup()}}>ok</button>
                </div>
            </div>
        </div>
        )
    }
}

export default Custompopup;
import React from 'react';

import "./style.scss";

class Checkoutpop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {quantity:0, total: 0}
        this.openPopup = this.openPopup.bind(this);
    }


    openPopup (){
        document.getElementById("customPopup").classList.add("show");
    }

    render() {
        return (
            <div className="checkoutSection">
            <div className="checkInfo">
                <p>Qty : {this.state.quantity}</p>
                <p>Total : {this.state.total}</p>
            </div>
            <button className="checkoutBtn" onClick={()=>{this.openPopup()}}>CHECKOUT</button>
        </div>
        )
    }
}

export default Checkoutpop;
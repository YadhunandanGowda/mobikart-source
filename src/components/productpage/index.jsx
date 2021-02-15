import react from 'react';
import React , {useState} from 'react';
import { withRouter} from 'react-router';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import './style.scss';

import ProductThumbNail from '../productthumbnail/index';


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {quantity:0, total: 0}
        this.closePopup = this.closePopup.bind(this);
        this.openPopup = this.openPopup.bind(this);
    }

    componentDidMount() {
            this.setState((prev)=>({catagoryname: this.props.match.params.id}),()=>{console.log("done")});

            document.addEventListener("mouseup", e => {
                let container = document.getElementById("customPopup");
                if(document.getElementById("customPopup")){
                if((container == e.target) && document.getElementById("customPopup").getAttribute("class").includes("show") ) {
                document.getElementById("customPopup").classList.remove("show");
                }
                }})
    }

    closePopup (){
        document.getElementById("customPopup").classList.remove("show")
        // document.querySelectorAll(".customPopup")[0].classList.remove("show");
    }

    openPopup (){
        document.getElementById("customPopup").classList.add("show")
        // document.querySelectorAll(".customPopup")[0].classList.add("show");
    }

    render() {
        return(
                <section>
                    <h2 className="SectionTitle" id="some">{(this.state.catagoryname)? 
                    (this.state.catagoryname.toUpperCase()):(this.state.catagoryname)} :</h2>
                    <div className="productionSection">
                        <ProductThumbNail catagory={this.state.catagoryname} />
                    </div>
                    <div className="checkoutSection">
                        <div className="checkInfo">
                            <p>Qty : {this.state.quantity}</p>
                            <p>Total : {this.state.total}</p>
                        </div>
                        <button className="checkoutBtn" onClick={()=>{this.openPopup()}}>CHECKOUT</button>
                    </div>
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
                </section>
        )
    }
}

export default withRouter(Product);
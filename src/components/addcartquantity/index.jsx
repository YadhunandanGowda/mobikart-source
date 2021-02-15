import React  from 'react';

import './style.scss';

class Addcartquantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded : false , quantity: 0};
        this.productQuantity = this.productQuantity.bind(this);  
    }

    
    productQuantity (e){
        if((e.target.className).includes("add")){
            let sibling = e.target.nextSibling;
            // let num = sibling.innerText;
            // console.log(this.state);
            this.setState((prevState)=>({quantity: (prevState.quantity+1)}))
            // console.log(this.state);
            // sibling.innerText = (this.state.quantity);
        }else {
            let sibling = e.target.previousSibling;
            // let num = sibling.innerText;
            console.log(this);
            if(!(this.state.quantity == 0)){
                this.setState((prevState)=>({quantity: (prevState.quantity-1)}))
                // sibling.innerText = (this.state.quantity);
            }
        }
    }

    render() {
        return (
            <div className="prodAddCart">
                <button className="prodCartBtn">+ Cart</button> 
                <div className="prodQuantity">
                    <i className="add" onClick={(e)=>{this.productQuantity(e)}}>+</i>
                    <p className="qtyNum">{this.state.quantity}</p>
                    <i className="subt" onClick={(e)=>{this.productQuantity(e)}}>-</i>
                </div>
            </div>
        )
    }
}

export default Addcartquantity;
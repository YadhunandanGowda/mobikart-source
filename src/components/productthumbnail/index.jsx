import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faRupeeSign} from '@fortawesome/free-solid-svg-icons';

import "./style.scss"

class ProductThumbNail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded : false , quantity: 0}
        this.wishlistHeart = this.wishlistHeart.bind(this);
        this.productQuantity = this.productQuantity.bind(this);  
    }

    componentDidMount(){
        
            fetch("/json/product.json")
            .then(res=> {
                return res.json()
            })
            .then((result)=> {
                this.setState((prev)=>({product:result[this.props.catagory], loaded : true }),()=>{console.log("done")});
                console.log(this.state.product)
            })
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

    wishlistHeart = (e)=> {
        if(e.target.parentNode.parentNode.className.includes("yadhu")){
            e.target.parentNode.parentNode.classList.remove("yadhu");
        }else {
            e.target.parentNode.parentNode.classList.add("yadhu");
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.loaded?(
                    this.state.product.map((item)=>{
                        return (
                            <div className="productChild">
                                <div className="wishlistHeart">
                                    <i onClick={this.wishlistHeart}><FontAwesomeIcon icon={faHeart}/></i>
                                </div>
                                <div className="prodImg">
                                    <img src={item.productImage} alt="temp" />
                                </div>
                                <div className="prodInfo">
                                    <div className="prodName">
                                        <p className="prodbrand">{item.prodNameInfo.brand}</p>
                                        <p className="prodDesc">{item.prodNameInfo.productName}</p>
                                    </div>
                                    <div className="prodPrice">
                                        <p className="final"><i><FontAwesomeIcon icon={faRupeeSign}/></i>{item.prodPriceInfo.productSellingPrice}</p>
                                        <p className="real"><i><FontAwesomeIcon icon={faRupeeSign}/></i>{item.prodPriceInfo.productOriginalPrice}</p>
                                        <p className="discount">{item.prodPriceInfo.productDiscount}off</p>
                                    </div>
                                    <div className="prodAddCart">
                                        <button className="prodCartBtn">+ Cart</button> 
                                        <div className="prodQuantity">
                                            <i className="add" onClick={this.productQuantity}>+</i><p className="qtyNum">{this.state.quantity}</p><i className="subt" onClick={this.productQuantity}>-</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ):(<p>Loading...</p>)}
            </React.Fragment>
        )
    }
}

export default ProductThumbNail;
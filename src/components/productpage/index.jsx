import react from 'react';
import React , {useState} from 'react';
import { withRouter} from 'react-router';
import './style.scss';

import ProductThumbNail from '../productthumbnail/index';
import Checkoutpop from "../checkoutpop/index";
import Custompopup from '../custompopup/index';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {quantity:0, total: 0};
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


    render() {
        return(
                <section>
                    <h2 className="SectionTitle" id="some">{(this.state.catagoryname)? 
                    (this.state.catagoryname.toUpperCase()):(this.state.catagoryname)} :</h2>
                    <div className="productionSection">
                        <ProductThumbNail catagory={this.state.catagoryname} />
                    </div>
                    <Checkoutpop/>
                    <Custompopup/>
                </section>
        )
    }
}

export default withRouter(Product);
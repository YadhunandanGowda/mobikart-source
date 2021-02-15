import React from 'react';
import {Link} from 'react-router-dom';

import "./style.scss";

function Homethumbnail(props){
    return (
        <div className="CategoryChild">
        <Link className="atag" to={"product/"+props.urlParam}>
            <div className="thumbnailSec">
                <img src={props.Thumbnail} alt="yadhu"/>
            </div> 
            <p className="thumbTitle">{props.categoryName}</p>
                             </Link>
        </div>)
}


export default Homethumbnail;
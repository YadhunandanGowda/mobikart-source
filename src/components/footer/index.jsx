import React , {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle} from '@fortawesome/free-solid-svg-icons';

import "./style.scss";

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <footer>
                    <p className="help"><FontAwesomeIcon icon={faQuestionCircle}/> Help</p>
                    <p>&#169; 2007-2021 Mobikart.com</p>
            </footer>
        )
    }
}

export default Footer;
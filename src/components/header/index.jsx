import React, { Component } from "react";
import {Link} from "react-router-dom";
import './style.scss';
import './responsive.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch, faShoppingCart, faEdit, faBoxOpen,
    faHeart, faPowerOff, faBell, faPhoneAlt, faCog
} from '@fortawesome/free-solid-svg-icons';

// import sitelogo from "../../../public/assets/sitelogo.svg";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <div className="logoContainer">
                    <Link to="/">
                    <img src="/assets/sitelogo.svg" alt="Company Logo" />
                    </Link>
                </div>
                <div className="searchBox">
                    <input type="text" placeholder="Search Products" />
                    <button><FontAwesomeIcon icon={faSearch} /></button>
                </div>
                <div className="menu">
                    <div className="option">
                        <a href="javascript:void(0)">Profile</a>
                        <ul className="dropdown">
                            <li><i><FontAwesomeIcon icon={faEdit} /></i> Edit Profile</li>
                            <li><i><FontAwesomeIcon icon={faBoxOpen} /></i> Orders</li>
                            <li><i><FontAwesomeIcon icon={faHeart} /></i> Whislist</li>
                            <li><i><FontAwesomeIcon icon={faPowerOff} /></i> Logout</li>
                        </ul>
                    </div>
                    <div className="option">
                        <a href="javascript:void(0)">More</a>
                        <ul className="dropdown">
                            <li><i><FontAwesomeIcon icon={faBell} /></i> Notification</li>
                            <li><i><FontAwesomeIcon icon={faPhoneAlt} /></i> 24x7 Customer Care</li>
                            <li><i><FontAwesomeIcon icon={faCog} /></i> Settings</li>
                        </ul>
                    </div>
                    <div className="option">
                        <a href="javascript:void(0)"><i><FontAwesomeIcon icon={faShoppingCart} /></i> Cart</a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
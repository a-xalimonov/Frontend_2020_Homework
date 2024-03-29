import React from 'react';
import './Registration-header.css';
import HeaderIcon from '../../images/Header-icon.png'
import {
    Link
} from 'react-router-dom'

class RegistrationHeader extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="Heading">
                    <img src={HeaderIcon} alt="Header-icon" className="Header-icon" />
                    <p className="Header-line">РЕГИСТРАЦИЯ</p>
                </div>
                <div className="Return"><Link to="/" className="Return-link">НА ГЛАВНУЮ</Link></div>
            </div>
        );
    }
}

export default RegistrationHeader
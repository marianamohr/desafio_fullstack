import React from 'react';
import logo from '../images/logo-itFlex.png';

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Controle de Certificados</h1>
                <img className="logo-itflex" src={logo} alt="logo"/>
            </header>
        );
    }
}
export default Header;
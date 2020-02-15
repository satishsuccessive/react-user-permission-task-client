import React from 'react';
import Head from './style';
import logo from '../../images/logo2.png';

const Header = () => {
    return(
        <Head>
        <img src={logo} alt="logo" />
        <p>User Permission</p>
        </Head>
    )
}

export default Header;
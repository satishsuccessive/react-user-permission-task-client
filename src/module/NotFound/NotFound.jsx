import React from 'react';
import brokenImg from '../../images/losted.png';
import Notfound from './style';
const NotFound = () => {
    return(
        <>
        <Notfound>
        <img src={brokenImg} alt="puppy" />
        <p>Sorry, we can’t find the page you were looking for</p>
        </Notfound>
        </>
    )
}

export default NotFound;
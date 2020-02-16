import React from 'React';
import ReactSnackBar from "react-js-snackbar";
import Snack from './style'
import { Children } from 'react';

const Snackbar = (props) => {
    return(
    <Snack>
        <ReactSnackBar Show={props.Show}>
            {props.children}
        </ReactSnackBar>
    </Snack>
    )
}

export default Snackbar;
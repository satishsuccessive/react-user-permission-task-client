
import React, { Children } from 'react';


const SubmitButton = (props) => {
    const {type,onClick,disabled,children} = props;
    return(
        <div>
        <button type={type} onClick={onClick} disabled={disabled}>{children}</button>
        </div>
    )
  }

  export default SubmitButton;
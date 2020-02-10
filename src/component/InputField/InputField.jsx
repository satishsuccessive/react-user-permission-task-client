
import React from 'react';


const Inputfield = (props) => {
    return(
        <>
        <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
        </>
    )
  }

  export default Inputfield;
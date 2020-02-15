
import React from 'react';


const Inputfield = (props) => {
    return (
        <>
            <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} onBlur={props.onBlur} disabled={props.disabled} />
        </>
    )
}

export default Inputfield;
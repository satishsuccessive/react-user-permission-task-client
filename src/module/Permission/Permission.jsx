import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getRoleData } from '../../libs/utils/graphql';
import Container from './style';
import Button from '../../component/SubmitButton';
import { hasPermissions } from './helper';
import {
	Redirect
} from 'react-router-dom';

const PermissionView = (props) => {
    const [ redirect, setRedirect] = useState(false);
    const [ redirectView, setRedirectView] = useState(false);
    const {location} = props;
    const permissionData = location.state.permission;
  
      const renderRedirect = () => {
        if (redirect) return <Redirect to='/read' />
        if (redirectView) return <Redirect to={{ pathname: "/write", state: {flag:true,permission:'ok'} }} />
        }
      

    return(
        <>
        <Container>
        {renderRedirect()}        
        <Button disabled={permissionData.read} onClick={() => setRedirect(true)}>Read</Button>
        <Button disabled={permissionData.write} onClick={() =>setRedirectView(true)}>Write</Button>
        <Button disabled={permissionData.delete}>Delete</Button>
        </Container>
        </>

    )
}

export default PermissionView;
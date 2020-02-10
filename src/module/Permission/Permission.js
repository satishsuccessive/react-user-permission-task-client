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
    // const [ visible, setVisible] = useState('disabled');
    const [ redirect, setRedirect] = useState('');

    const { loading, error, data } = useQuery(getRoleData);
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error :(</p>;
    // if (data.getRole.length===0) return<p>Ooops Don't have data</p>;
    // const checkpermission = () => {
    //     console.log('yooooo');
    //     setVisible('');
    // }
  
      const renderRedirect = () => {
        if (redirect) {
          return <Redirect to='/users' />
        }
      }

    return(
        <>
        <Container>
        { (data.getRole.length===0) && <p>Ooops Don't have data</p>}
        { data.getRole.map((item, index) => (
        <div>
        <h3>User: {item.inputEmail} Role:{item.selectRole}</h3>
        
        <Button disabled={hasPermissions("getUsers", "trainee", "read")} onClick={() => setRedirect(true)}>Read</Button>
        {renderRedirect()}
        <Button disabled={hasPermissions("getUsers", item.selectRole, "write")}>Write</Button>
        <Button disabled={hasPermissions("getUsers", item.selectRole, "delete")}>Delete</Button>
        </div>
        ))
        }
        </Container>
        </>

    )
}

export default PermissionView;
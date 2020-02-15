import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from '../module/Form';
import UserData from '../module/Users';
import PermissionView from '../module/Permission/Permission';
import UpdateRoll from '../module/Updateroll';
import ProtectedRoute from './ProtectedRoutes';
import NotFound from '../module/NotFound'


const Routes = (props) => {
  return (

        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/read" component={UserData} />
          <ProtectedRoute path="/permission" component={PermissionView} />
          <Route path="/write" component={UpdateRoll} />
          {/* <Route exact path="/permission" component={PermissionView} /> */}
          <Route component={NotFound} />
        </Switch>

  );
}

export default Routes;

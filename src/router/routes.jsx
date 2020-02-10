import React, { useContext, lazy, Suspense } from 'react';
import { Switch, Route, Router, Redirect, useLocation } from 'react-router-dom';
import RouteKey from '../router/RoutKey';
import Form from '../module/Form';
import UserData from '../module/Users';
import PermissionView from '../module/Permission/Permission';
// import {Form, UserData, PermissionView} from '../module'
import ProtectedRoute from './ProtectedRoutes';
import NotFound from '../module/NotFound'


const Routes = (props) => {
  return (

        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/users" component={UserData} />
          <ProtectedRoute path="/permission" component={PermissionView} />
          {/* <Route exact path="/permission" component={PermissionView} /> */}
          <Route component={NotFound} />
        </Switch>

  );
}

export default Routes;

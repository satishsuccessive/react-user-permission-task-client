import React, { Component } from 'react';
import { Switch, Route, Router, Redirect, useLocation } from 'react-router-dom';
import UpdateRoll from '../module/Updateroll';


class ProtectedRoute extends Component {
    render() {
      const { component: Component, ...props } = this.props
      return (
        <Route 
        {...props} 
        render={props => (
          this.props.location.state !==undefined ? <UpdateRoll {...props} /> : <Redirect to='/' />
        )} 
      />
      )
    }
  }

  export default ProtectedRoute;
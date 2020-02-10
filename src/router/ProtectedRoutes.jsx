import React, { Component } from 'react';
import { Switch, Route, Router, Redirect, useLocation } from 'react-router-dom';
import Permission from '../module/Permission';


class ProtectedRoute extends Component {
    render() {
      const { component: Component, ...props } = this.props
      console.log(this.props,'props------')
      return (
        <Route 
          {...props} 
          render={props => (
            this.props.location.state===true ? <Permission {...props} /> : <Redirect to='/' />
          )} 
        />
      )
    }
  }

  export default ProtectedRoute;
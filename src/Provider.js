import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './Apollo';

const Provider = ({ children }) => {
 return(
  <Router>
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  </Router>
)
 };

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

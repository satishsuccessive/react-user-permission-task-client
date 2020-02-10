import React from 'react';
import Provider from './Provider';
import { Getuser } from './component';
import Form from './module/Form';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router';


function App(props) {
  return (
    <Provider>
      <BrowserRouter>
      {/* <div>
        <Getuser />
        <Form />
      </div> */}
      <Routes {...props} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

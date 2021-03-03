import React from 'react';
import Client1 from './Client1';
import Client2 from './Client2';
import Client3 from './Client3';
const App = (props) => {
  return (
    <React.Fragment>
      <Client1 />
      <Client2 />
      <Client3 />
    </React.Fragment>
  );
};

export default App;

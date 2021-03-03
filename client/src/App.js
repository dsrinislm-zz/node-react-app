import React from 'react';
import './App.css';
import { BrowserRouter as OutletRouter } from 'react-router-dom-next';
import RouterOutput from './routes';
const App = (props) => {
  return (
    <OutletRouter>
      <RouterOutput />
    </OutletRouter>
  );
};

export default App;

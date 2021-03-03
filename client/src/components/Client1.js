import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import StockTable from './StockTable';
const Client1 = (props) => {
  useEffect(() => {
    fetch('http://localhost:9000/stocks/Infosys,TCS')
      .then((res) => res.json())
      .then((res) => setStocks(res));
  }, []);
  const [stocks, setStocks] = useState([]);
  return (
    <Grid item xs={12} sm={6}>
      <h1>Client1</h1>
      <StockTable items={stocks} />
    </Grid>
  );
};

export default Client1;

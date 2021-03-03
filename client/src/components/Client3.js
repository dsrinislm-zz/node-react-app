import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import StockTable from './StockTable';
const Client3 = (props) => {
  useEffect(() => {
    fetch('http://localhost:9000/stocks')
      .then((res) => res.json())
      .then((res) => setStocks(res));
  }, []);
  const [stocks, setStocks] = useState([]);
  return (
    <Grid item xs={12} sm={6}>
      <h1>Client3</h1>
      <StockTable items={stocks} />
    </Grid>
  );
};

export default Client3;

import React, { useEffect, useState } from 'react';
import StockTable from './StockTable';
const Client1 = (props) => {
  useEffect(() => {
    fetch('http://localhost:9000/stocks/Infosys,TCS')
      .then((res) => res.json())
      .then((res) => setStocks(res));
  }, []);
  const [stocks, setStocks] = useState([]);
  return <StockTable items={stocks} />;
};

export default Client1;

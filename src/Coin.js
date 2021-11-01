import React from 'react';
import './Coin.css';


const Coin = ({
  name,
  price,
  symbol,
  image,
  percentage,
  rank
}) => {

  return (
    <div className='container'>
      <div className='row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='symbol'>{symbol}</p>
        </div>
        <div className='data'>
          <p className='price'>₹{price}</p>
          <p className='rank'>{rank}</p>
           


          {percentage < 0 ? (
            <p className='coin-percent red'>{percentage.toFixed(2)}%</p> //agar 0 se kam hai to show in red
          ) : (
            <p className='coin-percent green'>{percentage.toFixed(2)}%</p> // agar 0 se jada hai to show in green
          )}

        

        </div>
      </div>
    </div>
  );
};

export default Coin;
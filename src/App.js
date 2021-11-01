import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  
 
  useEffect(() => {
    axios                        //axios.get se api call kiya hai
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false'
      )
      .then(response => {
        setCoins(response.data);
        console.log(response.data);
      })
      .catch( error=> alert('bhagjaaaa'));            //checking for error
  }, []);

  const handleChange = e => {
  console.log(e.target.value)
    setSearch(e.target.value);                 //jo bhi content input box me aaega vo e me store hoga
  };



  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) //coins ko filter karke show karega
  );

  return (
    <div className='app'>
      <div className='search'>
        
        <h1 className='text'>Search a Coin</h1>
      
        <form>
        
      
          <input
            className='input'
            type='text'
            onChange={handleChange}  //type krte hi box me onchange call ho jaega
            placeholder='Search'
          />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            image={coin.image}
            percentage={coin.price_change_percentage_24h}
            rank={coin.market_cap_rank}
          />
        );
      })}
    </div>
  );
}

export default App;
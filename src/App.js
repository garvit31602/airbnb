import React from 'react';
import ReactDOM from 'react-dom/client';

import Navbar from './Navbar';
import Top from './Top';
import Card from './Card';
import data from './data';

function App(){
  const cardElement=data.map(item =>{
    return <Card
        img={item.coverImg}
        title={item.title}
        rating={item.stats.rating}
        reviewcount={item.stats.reviewCount}
        country={item.location}
        price={item.price}
        openSpots={item.openSpots}
    />
})
  return(
    <div>
      <Navbar/>
      <Top/>
      <div id="cardElement">
      {cardElement}
      </div>
    </div>
  )
}

export default App;


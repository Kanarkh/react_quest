import React, { Component } from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id:0,
    name: "Kimchi",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eHiR-RpR7zlQpM08wEtf6gHaHa%26pid%3DApi&f=1",
    rating: 5.0
  },
  {
    id:1,
    name: "Samgyeopsal",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UmVEcfZCr9vDfLdcnDyoLAHaFj%26pid%3DApi&f=1",
    rating: 4.4
  },
  {
    id:2,
    name: "Bibimbap",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QaI8uq_CsvpEFf69otfU3AHaFj%26pid%3DApi&f=1",
    rating: 4.3
  },
  {
    id:3,
    name: "Doncasu",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.h0YZ66T3JqVXayoCl-_NaQHaE8%26pid%3DApi&f=1",
    rating: 3.9
  },
  {
    id:4,
    name: "Kimbap",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QQXwqrPx-5Zu7KeG3RxkEwHaEK%26pid%3DApi&f=1",
    rating: 4.1
  }
];

function Food({name, picture,rating}){
  return(
    <div>
      <h2>I love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  )
}

Food.propTypes ={
  name: PropTypes.string.isRequired,
  picture: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
};

function App()   {
  return(
  <div>
    <h1>gHello</h1>
    {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)}
  </div>
  );
}

export default App;

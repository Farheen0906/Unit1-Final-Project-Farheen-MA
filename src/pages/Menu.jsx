import React from 'react';
import { useState } from 'react';
import { menuItems } from '../data/menudata';

function Menu(item, category) {

  const handleAddToCart = () => {
    alert("Item Added");
  }
  return (
    <div>
      <h1>Our Menu</h1>
      <p>Select a category to get started!!!!</p>
      <div>
        {menuItems.map((item) => (
          <div key={item.id}>


            <img src={item.image} alt="Meal image" className="menu-image" />
            <p >Category :{item.category}</p>

            <h3>Title: {item.title}</h3>
            <p>{item.about}</p>
            <p>Ingredients:{item.ingredients}</p>
            <p>${item.price}</p>
            <p>Serves: {item.serves}</p>
                  <button className="add-to-cart-btn" onClick={handleAddToCart} >Add to cart</button>
          </div>
          
        ))}
      </div>


    </div>


  );
}
export default Menu;
import React from 'react';
import { useState } from 'react';
import { menuItems } from '../data/menudata';
import MenuCard from '../components/MenuCard';
function Menu({addToCart}) {
//props : addToCart function from App.jsx
  return (
    <div className='menu-page'>
      <h1>Our Menu</h1>
      <p>Select an item to get started!!!!</p>
      <div className='menu-grid'>
        {menuItems.map((item) => (
          <MenuCard key={item.id}
          item={item}
          addToCart={addToCart}
          />
           ))}
      </div>


    </div>


  );
}
export default Menu;
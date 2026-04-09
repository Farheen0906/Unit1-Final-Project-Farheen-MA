import { menuItems } from '../data/menudata';
import MenuCard from '../components/MenuCard';
import './Menu.css';
function Menu({addToCart}) {
//props : addToCart function from App.jsx
  return (
    <div className='menu-page'>
      <div className='menu-page-header'>
      <h1 className='menu-page-title'>Our Menu</h1>
      <p className='menu-page-content'>Select an item to get started!!!!</p>
      <div className='menu-grid'>
        {menuItems.map((item) => (
          <MenuCard key={item.id}
          item={item}
          addToCart={addToCart}
          />
           ))}
      </div>
      </div>
</div>
  );
}
export default Menu;
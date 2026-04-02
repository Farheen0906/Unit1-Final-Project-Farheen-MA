//child component
import Button from './Button';
function MenuCard({item, addToCart}) {
  return (
    
    <div className='menu-card'>
            <img src={item.image} alt="Meal image" className="menu-image" />
            <p >Category :{item.category}</p>
             <h3>Title: {item.title}</h3>
            <p>About:{item.about}</p>
            <p>Ingredients:{item.ingredients}</p>
            <p>Price: ${item.price}</p>
            <p>Serves: {item.serves}</p>
            <Button className="add-to-cart-btn" text="Add to Cart" onClick={() => addToCart(item)} />
          </div>
        
  )
}
export default MenuCard;
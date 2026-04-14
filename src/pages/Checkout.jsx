import OrderForm from "../components/OrderForm";
import './Checkout.css';

// Props from App.jsx:
// cart, removeFromCart, updateQuantity, clearCart, subtotal, serviceFee, total
function Checkout({ cart, removeFromCart, updateQuantity, clearCart,
  cartSubtotal,cartTotal, serviceFee, }) {
  return (
    <main>
      <div className="checkout-header">
      <h1>Checkout</h1>
      </div>
      <div className="checkout-body">
      {cart.length === 0 ? (
        <p className="cart-empty">No items in cart</p>
      ) : (
        <>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item)=>(
              <tr key={item.id}>

                <td>{item.title}</td>

                <td>
                <button onClick={()=> updateQuantity(item.id,item.quantity-1)}> - </button>
                {item.quantity}
                <button onClick={()=> updateQuantity(item.id,item.quantity+1)}> + </button>
                </td>

                <td>Price:$ {item.price*item.quantity}</td>

                <td>
                  <button onClick={()=> removeFromCart(item.id)}>Remove</button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
       
        <section>
          <p>Subtotal: ${cartSubtotal}</p>
          <p>Service Fee: ${serviceFee}</p>
          <h3>Total: ${cartTotal}</h3>
        </section>
        <button className='clear-cart-btn' onClick={clearCart}>Clear Cart</button>
           <OrderForm />
        </>
      )}
       </div>
    </main>
  );
}

export default Checkout;
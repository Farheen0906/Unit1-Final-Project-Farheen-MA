import CartTable from "../components/CartTable";
import OrderForm from "../components/OrderForm";

function Checkout({ cart, removeFromCart, updateQuantity, clearCart,
  cartSubtotal,cartTotal, serviceFee, }) {
  return (
    <main>
      <h1>Checkout</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
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
        <button onClick={clearCart}>Clear Cart</button>
          <CartTable cart={cart} />
          <OrderForm />
        </>
      )}
    </main>
  );
}

export default Checkout;
import CartTable from "../components/CartTable";
import OrderForm from "../components/OrderForm";

function Checkout({ cart }) {
  return (
    <main>
      <h1>Checkout</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <CartTable cart={cart} />
          <OrderForm />
        </>
      )}
    </main>
  );
}

export default Checkout;
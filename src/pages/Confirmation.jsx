import './Confirmation.css';

function Confirmation({cartCount}) {
     return (
    <div className="order-success">
      <h2>🎉 Order Confirmed!</h2>
      <p>Your order has been placed successfully!!!!!!</p>
    </div>
  );
}

export default Confirmation;
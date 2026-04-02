function CartTable({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section>
      <h2>Order Summary</h2>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Ingredients</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item.title}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total: ${total}</h3>
    </section>
  );
}

export default CartTable;
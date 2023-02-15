import React, { useState } from "react";

function Demo(props) {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "A", price: 7 },
    { id: 2, name: "B", price: 10 },
    { id: 3, name: "C", price: 8 },
    { id: 4, name: "D", price: 22 },
    { id: 5, name: "E", price: 5 },
    { id: 6, name: "F", price: 30 },
    { id: 7, name: "G", price: 100 },
    { id: 8, name: "H", price: 78 },
  ];

  const handleAddCart = (item) => {
    const findItem = cart.find((element) => element.id === item.id);
    if (!findItem) {
      setCart([...cart, { ...item, qty: 1 }]);
    } else {
      alert("Go To Cart");
    }
  };

  const handleIncrementItem = (item) => {
    const findItem = cart.find((element) => element.id === item.id);
    if (findItem) {
      const updatedProduct = cart.map((product) =>
        product.id === item.id ? { ...product, qty: product.qty + 1 } : product
      );
      setCart(updatedProduct);
    }
  };

  const handleDecrementItem = (item) => {
    const findItem = cart.find((element) => element.id === item.id);
    if (findItem && findItem.qty === 1) {
      const updatedProduct = cart.filter((product) => product.id !== item.id);
      setCart(updatedProduct);
    } else {
      const updatedProduct = cart.map((product) =>
        product.id === item.id ? { ...product, qty: product.qty - 1 } : product
      );
      setCart(updatedProduct);
    }
  };

  return (
    <div>
      <p>Our Products</p>
      <br />
      <table cellPadding="10">
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => handleAddCart(item)}>Add</button>
              </td>
              <td>
                <button onClick={() => handleIncrementItem(item)}>+</button>
              </td>
              <td>
                <button onClick={() => handleDecrementItem(item)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Demo;

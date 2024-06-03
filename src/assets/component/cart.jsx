

import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const storedItems = useSelector((state) => state.todo.storedItems);

  return (
    <div>
      Cart
      {storedItems.map((item) => (
        <div key={item.id}>{item.text}</div>
      ))}
    </div>
  );
}

export default Cart;

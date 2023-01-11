import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Order from "./Components/order";

function App() {
  const [orders, setOrders] = useState([]);
  const getOrders = async () => {
    const response = await fetch(
      "https://fasteat-21975-default-rtdb.firebaseio.com/orders.json"
    );
    //    const response = await fetch('https://fasteat-21975-default-rtdb.firebaseio.com/orders/id.json',{method:"PUT",body:{}})

    const data = await response.json();
    setOrders(Object.values(data));
  };
  useEffect(() => {
    getOrders();
    console.log("orders", orders);
  }, []);
  return (
    <>
      <div className="navbar">
        <h2>Wagbaa</h2>
        <p>Orders</p>
      </div>

      {orders?.map((item) => (
        <Order
          key={item.id}
          orderId={item.id}
          totalCost={item.totalPrice}
          orderStatus={item.status}
          item={item}
        />
      ))}
    </>
  );
}

export default App;

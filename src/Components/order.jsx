import React, { useState } from "react";

export default function Order({ orderId, totalCost, orderStatus, item }) {
  const [state, setState] = useState(orderStatus);
  const onChangeStatus = async (currentStatus) => {
    setState(currentStatus);
    const response = await fetch(
      `https://fasteat-21975-default-rtdb.firebaseio.com/orders/${orderId}.json`,
      {
        method: "PUT",
        body: JSON.stringify({ ...item, status: currentStatus }),
      }
    );
    console.log({ ...item, status: currentStatus });
    //https://fasteat-21975-default-rtdb.firebaseio.com/orders
  };

  return (
    <div className="order">
      <p>OrderId: {orderId}</p>

      <div style={{ display: "flex", alignItems: "center" }}>
        {/* <p>Status:</p> */}
        <p
          onClick={(e) => onChangeStatus(e.target.innerHTML)}
          className={`status ${state === "Preparing" ? "selected" : ""} `}
        >
          Preparing
        </p>
        <p
          onClick={(e) => onChangeStatus(e.target.innerHTML)}
          className={`status  ${state === "Delivering" ? "selected" : ""} `}
        >
          Delivering
        </p>
        <p
          onClick={(e) => onChangeStatus(e.target.innerHTML)}
          className={`status  ${state === "Delivered" ? "selected" : ""} `}
        >
          Delivered
        </p>
      </div>

      <p>{totalCost}</p>
    </div>
  );
}

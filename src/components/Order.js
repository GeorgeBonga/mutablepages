import React from 'react';

const Order = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.business_id}</td>
      <td>{props.date}</td>
      <td>{props.payment_mode}</td>
      <td>{props.status}</td>
      <td>
        {props.ordered_item.map((item) => (
          <tr key={item.id}>
            {/* <td>{item.id}</td> */}
            <td>
              {`${item.product_id.substring(0, 4)}...${item.product_id.substring(item.product_id.length - 4)}`}
            </td>
            <td>{item.quantity}</td>
            <td>${item.price.toFixed(2)}</td>
          </tr>
        ))}
      </td>
    </tr>
  );
};

export default Order;

import React from "react";
import Order from "./Order";

const OrderList = (props) => {
  const visibleOrders = props.filteredOrders.map((order) => {
    return <Order key={order.id} {...order} />;
  });

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">ID</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Bussiness ID</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Payment Mode</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Status</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Ordered Item</h3>
            <tr>
              <td>Item ID</td>
              <td>Quantity</td>
              <td>Price</td>
            </tr>
          </th>
        </tr>
        {visibleOrders}
      </tbody>
    </table>
  );
};

export default OrderList;

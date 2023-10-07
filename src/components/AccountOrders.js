import React, { Component } from 'react';
import OrderList from './OrderList';
import Search from './Search';


const Orders = [
    {
        "business_id": "c74187fb02e94bb6a45c7893a1164807",
        "date": "Sat, 07 Oct 2023 09:43:01 GMT",
        "id": "001d850e2b7e46e38030fc1c27f708bc",
        "ordered_item": [
          {
            "id": 28,
            "order_id": "001d850e2b7e46e38030fc1c27f708bc",
            "price": 20,
            "product_id": "26ec729ee8db427ea20fd62399f0fdf4",
            "quantity": 1
          },
          {
            "id": 29,
            "order_id": "001d850e2b7e46e38030fc1c27f708bc",
            "price": 30,
            "product_id": "29ee9b64769b4da59cb2f43ed963627d",
            "quantity": 1
          }
        ],
        "payment_mode": "Cash",
        "payment_status": null,
        "status": "completed"
      },
      {
        "business_id": "c74187fb02e94bb6a45c7893a1164807",
        "date": "Fri, 06 Oct 2023 09:12:59 GMT",
        "id": "0332445131804fcd8a4b5b6f7b1548f8",
        "ordered_item": [
          {
            "id": 8,
            "order_id": "0332445131804fcd8a4b5b6f7b1548f8",
            "price": 20,
            "product_id": "26ec729ee8db427ea20fd62399f0fdf4",
            "quantity": 1
          },
          {
            "id": 9,
            "order_id": "0332445131804fcd8a4b5b6f7b1548f8",
            "price": 100,
            "product_id": "29b17853a5b44e04afa70e3326b3f8d2",
            "quantity": 1
          }
        ],
        "payment_mode": "Cash",
        "payment_status": null,
        "status": "completed"
      },
      {
        "business_id": "c74187fb02e94bb6a45c7893a1164807",
        "date": "Fri, 06 Oct 2023 11:45:45 GMT",
        "id": "05681bd1224e4e28a01127a45531e98c",
        "ordered_item": [
          {
            "id": 24,
            "order_id": "05681bd1224e4e28a01127a45531e98c",
            "price": 100,
            "product_id": "913c9152d9e2486e89646aab383e89aa",
            "quantity": 1
          },
          {
            "id": 25,
            "order_id": "05681bd1224e4e28a01127a45531e98c",
            "price": 200,
            "product_id": "ed1274e00c0343c59dc52db6457c84b5",
            "quantity": 1
          }
        ],
        "payment_mode": "Cash",
        "payment_status": null,
        "status": "completed"
      },
      {
        "business_id": "c74187fb02e94bb6a45c7893a1164807",
        "date": "Fri, 06 Oct 2023 08:40:32 GMT",
        "id": "071ed902359a4f8b979d099f3ba34daa",
        "ordered_item": [
          {
            "id": 1,
            "order_id": "071ed902359a4f8b979d099f3ba34daa",
            "price": 20,
            "product_id": "26ec729ee8db427ea20fd62399f0fdf4",
            "quantity": 1
          },
          {
            "id": 2,
            "order_id": "071ed902359a4f8b979d099f3ba34daa",
            "price": 600,
            "product_id": "721d2efd8fc74732b53287b18b3e295b",
            "quantity": 2
          }
        ],
        "payment_mode": "Cash",
        "payment_status": null,
        "status": "completed"
      },
      {
        "business_id": "c74187fb02e94bb6a45c7893a1164807",
        "date": "Fri, 06 Oct 2023 09:16:18 GMT",
        "id": "0d988016fb7d4dd390bacb4554f66258",
        "ordered_item": [
          {
            "id": 10,
            "order_id": "0d988016fb7d4dd390bacb4554f66258",
            "price": 20,
            "product_id": "26ec729ee8db427ea20fd62399f0fdf4",
            "quantity": 1
          },
          {
            "id": 11,
            "order_id": "0d988016fb7d4dd390bacb4554f66258",
            "price": 200,
            "product_id": "ed1274e00c0343c59dc52db6457c84b5",
            "quantity": 1
          }
        ],
        "payment_mode": "Cash",
        "payment_status": null,
        "status": "completed"
      },
      {
        "business_id": "c74187fb02e94bb6a45c7893a1164807",
        "date": "Fri, 06 Oct 2023 08:59:31 GMT",
        "id": "641bc025cf224cdebb6350c54542c11e",
        "ordered_item": [
          {
            "id": 5,
            "order_id": "641bc025cf224cdebb6350c54542c11e",
            "price": 20,
            "product_id": "26ec729ee8db427ea20fd62399f0fdf4",
            "quantity": 1
          },
          {
            "id": 6,
            "order_id": "641bc025cf224cdebb6350c54542c11e",
            "price": 100,
            "product_id": "29b17853a5b44e04afa70e3326b3f8d2",
            "quantity": 1
          },
          {
            "id": 7,
            "order_id": "641bc025cf224cdebb6350c54542c11e",
            "price": 600,
            "product_id": "721d2efd8fc74732b53287b18b3e295b",
            "quantity": 1
          }
        ],
        "payment_mode": "Cash",
        "payment_status": null,
        "status": "completed"
      },
      {
        "business_id": "c74187fb02e94bb6a45c7893a1164807",
        "date": "Fri, 06 Oct 2023 12:15:20 GMT",
        "id": "65d8a27c23204772a434348b48d2794f",
        "ordered_item": [
          {
            "id": 26,
            "order_id": "65d8a27c23204772a434348b48d2794f",
            "price": 20,
            "product_id": "26ec729ee8db427ea20fd62399f0fdf4",
            "quantity": 1
          },
          {
            "id": 27,
            "order_id": "65d8a27c23204772a434348b48d2794f",
            "price": 600,
            "product_id": "721d2efd8fc74732b53287b18b3e295b",
            "quantity": 1
          }
        ],
        "payment_mode": "Cash",
        "payment_status": null,
        "status": "completed"
      },
      {
        "business_id": "c74187fb02e94bb6a45c7893a1164807",
        "date": "Fri, 06 Oct 2023 11:08:13 GMT",
        "id": "a294c94d16424c1797dc4befe210d0ba",
        "ordered_item": [
          {
            "id": 12,
            "order_id": "a294c94d16424c1797dc4befe210d0ba",
            "price": 20,
            "product_id": "26ec729ee8db427ea20fd62399f0fdf4",
            "quantity": 1
          },
          {
            "id": 13,
            "order_id": "a294c94d16424c1797dc4befe210d0ba",
            "price": 600,
            "product_id": "4d52b2acea3447258f545681f811dc74",
            "quantity": 1
          }
        ],
        "payment_mode": "Cash",
        "payment_status": null,
        "status": "completed"
      },
      {
        "business_id": "c74187fb02e94bb6a45c7893a1164807",
        "date": "Fri, 06 Oct 2023 11:44:06 GMT",
        "id": "c3e2d2b865524c509c4b96dfacd31f2d",
        "ordered_item": [
          {
            "id": 22,
            "order_id": "c3e2d2b865524c509c4b96dfacd31f2d",
            "price": 20,
            "product_id": "26ec729ee8db427ea20fd62399f0fdf4",
            "quantity": 1
          },
          {
            "id": 23,
            "order_id": "c3e2d2b865524c509c4b96dfacd31f2d",
            "price": 100,
            "product_id": "29b17853a5b44e04afa70e3326b3f8d2",
            "quantity": 1
          }
        ],
        "payment_mode": "Cash",
        "payment_status": null,
        "status": "completed"
      },
      {
        "business_id": "c74187fb02e94bb6a45c7893a1164807",
        "date": "Fri, 06 Oct 2023 11:13:48 GMT",
        "id": "e1292c96f3d8448c86fea917dfd8acb1",
        "ordered_item": [
          {
            "id": 19,
            "order_id": "e1292c96f3d8448c86fea917dfd8acb1",
            "price": 30,
            "product_id": "29ee9b64769b4da59cb2f43ed963627d",
            "quantity": 1
          },
          {
            "id": 20,
            "order_id": "e1292c96f3d8448c86fea917dfd8acb1",
            "price": 40,
            "product_id": "3f07c1047a074795ba62451f0fe0ddf3",
            "quantity": 1
          },
          {
            "id": 21,
            "order_id": "e1292c96f3d8448c86fea917dfd8acb1",
            "price": 300,
            "product_id": "4086bdac883c45d3b2ae2c01a81256d2",
            "quantity": 1
          }
        ],
        "payment_mode": "Cash",
        "payment_status": null,
        "status": "completed"
      },
      {
        "business_id": "c74187fb02e94bb6a45c7893a1164807",
        "date": "Fri, 06 Oct 2023 11:12:31 GMT",
        "id": "f701e61c467b4d938a6626118829a18e",
        "ordered_item": [
          {
            "id": 17,
            "order_id": "f701e61c467b4d938a6626118829a18e",
            "price": 40,
            "product_id": "3f07c1047a074795ba62451f0fe0ddf3",
            "quantity": 2
          },
          {
            "id": 18,
            "order_id": "f701e61c467b4d938a6626118829a18e",
            "price": 300,
            "product_id": "4086bdac883c45d3b2ae2c01a81256d2",
            "quantity": 1
          }
        ],
        "payment_mode": "Cash",
        "payment_status": null,
        "status": "completed"
      },
      {
        "business_id": "c74187fb02e94bb6a45c7893a1164807",
        "date": "Fri, 06 Oct 2023 08:46:01 GMT",
        "id": "fc5d018e80e942a8b78d67da8afcea13",
        "ordered_item": [
          {
            "id": 3,
            "order_id": "fc5d018e80e942a8b78d67da8afcea13",
            "price": 20,
            "product_id": "26ec729ee8db427ea20fd62399f0fdf4",
            "quantity": 1
          },
          {
            "id": 4,
            "order_id": "fc5d018e80e942a8b78d67da8afcea13",
            "price": 600,
            "product_id": "721d2efd8fc74732b53287b18b3e295b",
            "quantity": 2
          }
        ],
        "payment_mode": "Cash",
        "payment_status": null,
        "status": "completed"
      },
      {
        "business_id": "c74187fb02e94bb6a45c7893a1164807",
        "date": "Fri, 06 Oct 2023 11:09:08 GMT",
        "id": "fdd9d3ccd910429c94f4b1faf2b1f5e3",
        "ordered_item": [
          {
            "id": 14,
            "order_id": "fdd9d3ccd910429c94f4b1faf2b1f5e3",
            "price": 100,
            "product_id": "29b17853a5b44e04afa70e3326b3f8d2",
            "quantity": 1
          },
          {
            "id": 15,
            "order_id": "fdd9d3ccd910429c94f4b1faf2b1f5e3",
            "price": 20,
            "product_id": "26ec729ee8db427ea20fd62399f0fdf4",
            "quantity": 1
          },
          {
            "id": 16,
            "order_id": "fdd9d3ccd910429c94f4b1faf2b1f5e3",
            "price": 200,
            "product_id": "ed1274e00c0343c59dc52db6457c84b5",
            "quantity": 1
          }
        ],
        "payment_mode": "Cash",
        "payment_status": null,
        "status": "completed"
      }
  ];
  
class AccountOrders extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: Orders,
      filteredOrders: Orders,
      searchTerm: '',
    };
  }


   // utaweza fetch api na hiyo tuione

  // componentDidMount = () => {
  //   fetch('http://151.80.93.111:8000/orders')
  //   .then(response => response.json())
  //   .then(orders => this.setState({
  //     orders: orders,
  //     filteredOrders: orders
  //   }))
  // }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ searchTerm: value }, this.filterOrders);
  };

  filterOrders = () => {
    const { searchTerm } = this.state;
    const searchQuery = Orders.filter((order) => {
      return (
        order.id.toString().includes(searchTerm) ||
        order.business_id.includes(searchTerm) ||
        order.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.payment_mode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.status.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    this.setState({ filteredOrders: searchQuery });
  };

  render() {
    const { filteredOrders } = this.state;

    return (
      <div>
        <div className="ui segment teal inverted"  style={{ borderRadius: '0' }}>
          <h4>MUTABLE ORDERS</h4>
        </div>
      
        <Search handleChange={this.handleChange} />
 
        <OrderList filteredOrders={filteredOrders} />
      </div>
    );
  }
}

export default AccountOrders;

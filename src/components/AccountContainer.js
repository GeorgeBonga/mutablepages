import React, { Component } from 'react';
import TransactionsList from './TransactionsList';
import Search from './Search';

const Transactions = [
  {
    id: 1,
    name: "Bonga",
    date: "2017-02-28 11:00:00",
    amount: -20000,
  },
  {
    id: 2,
    name: "Transaction", 
    date: "2017-02-29 10:30:00",
    amount: 100000,
  },
  {
    id: 3,
    name: "Ken", 
    date: "2017-05-24 10:53:00",
    amount: 1498,
  },
  {
    id: 4,
    name: "Mutable ",
    date: "2017-05-24 08:52:00",
    amount: 365,
  },
  {
    id: 5,
    name: "John",
    date: "2017-06-15 15:20:00",
    amount: -5000,
  },
  {
    id: 6,
    name: "Alice", 
    date: "2017-07-02 18:45:00",
    amount: 7500,
  },
  {
    id: 7,
    name: "David", 
    date: "2017-08-10 09:15:00",
    amount: -1200,
  },
  {
    id: 8,
    name: "Emily",
    date: "2017-08-28 14:30:00",
    amount: 23000,
  },
  {
    id: 9,
    name: "Sophia",
    date: "2017-09-05 07:22:00",
    amount: -6000,
  },
];


class AccountContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: Transactions,
      filteredTransactions: Transactions,
      searchTerm: '',
    };
  }


 

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ searchTerm: value }, this.searchTransactions);
  };

  searchTransactions = () => {
    const { transactions, searchTerm } = this.state;
    const searchQuery = transactions.filter((transaction) => {
      return (
        transaction.id.toString().includes(searchTerm) ||
        transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  
    this.setState({ filteredTransactions: searchQuery });
  };
  
  render() {
    const { filteredTransactions } = this.state;
    return (
      <div>
        <div className="ui segment green inverted" style={{ borderRadius: '0' }}>
          <h4>MUTABLE TRANSACTIONS</h4>
        </div>
        <Search handleChange={this.handleChange} />
        <TransactionsList filteredTransactions={filteredTransactions} />
      </div>
    );
  }
}

export default AccountContainer;

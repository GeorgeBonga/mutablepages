// import React, { Component } from 'react'
// import AccountContainer from './AccountContainer'
// import TransactionsList from './TransactionsList'
// import '../stylesheets/App.css'
// import AccountOrders from './AccountOrders'; 
// class App extends Component {

//   render() {
//     return (
//       <div className="ui raised segment">
//         <div className="ui segment violet inverted">
//           <h2>MUTABLE TRASNSACTION PAGE</h2>
//         </div>
//         <AccountContainer />
      
//       </div>
//     )
//   }
// }

// export default App




// import React, { Component } from 'react';


// class App extends Component {
//   render() {
//     return (
//       <div className="ui container">
//         <h1 className="ui header">Order Details</h1>
//         <AccountOrders /> 
//       </div>
//     );
//   }
// }

// export default App;



import React, { Component } from 'react';
import AccountContainer from './AccountContainer';
import AccountOrders from './AccountOrders';
import '../stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAccountOrders: false, 
    };
  }


  toggleAccountOrders = () => {
    this.setState((prevState) => ({
      showAccountOrders: !prevState.showAccountOrders,
    }));
  };

  render() {
    const { showAccountOrders } = this.state;

    return (
      <div className="ui raised segment"  >
        <div className="ui segment blue inverted"  style={{ borderRadius: '0' }}>
          <h2>MUTABLE PAGES</h2>
        </div>

        <button className="ui button violet inverted" style={{ margin: '10px',borderRadius: '0'  }}  onClick={this.toggleAccountOrders}>
          GO TO THE OTHER PAGE
        </button>

     
        {showAccountOrders ? <AccountOrders /> : <AccountContainer />}
      </div>
    );
  }
}

export default App;

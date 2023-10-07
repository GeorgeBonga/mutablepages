import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {

  const visibleTransactions = props.filteredTransactions.map((transaction) => {
    return <Transaction key={transaction.id} {...transaction} />
  })

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              ID
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              NAME
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
             DATE
            </h3>
          </th>

          <th>
            <h3 className="ui center aligned header">
            AMOUNT
            </h3>
          </th>
        </tr>
        {visibleTransactions}
      </tbody>
    </table>
  )
}

export default TransactionsList

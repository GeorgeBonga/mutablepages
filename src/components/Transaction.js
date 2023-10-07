import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.date}</td>
      <td>{props.amount}</td>
    </tr>
  )
}
export default Transaction

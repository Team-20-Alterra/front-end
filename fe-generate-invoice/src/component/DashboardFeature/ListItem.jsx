import React from 'react'

const ListItem = () => {
  return (
    <table className='table-invoice text-center' cellPadding="15px">
      <thead>
        <tr>
          <th>Item</th>
          <th>Jumlah</th>
          <th>Harga Satuan</th>
          <th>Total Harga</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Item 1</td>
          <td>1</td>
          <td>Rp45.000</td>
          <td>Rp.45.000</td>
        </tr>
      </tbody>
    </table>
  )
}

export default ListItem
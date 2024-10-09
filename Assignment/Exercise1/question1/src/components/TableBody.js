import React from 'react';

function TableBody({ data }) {
  return (
    <tbody>
      {data.map(item => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.value}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;

import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

function Table({ data }) {
  return (
    <table>
      <TableHeader />
      <TableBody data={data} />
    </table>
  );
}

export default Table;

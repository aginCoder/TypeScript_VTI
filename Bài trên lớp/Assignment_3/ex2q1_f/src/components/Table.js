// Table.jsx
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import './Table.css';

const Table = ({ columns, data }) => {
  return (
    <table className="custom-table">
      <TableHeader columns={columns} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;

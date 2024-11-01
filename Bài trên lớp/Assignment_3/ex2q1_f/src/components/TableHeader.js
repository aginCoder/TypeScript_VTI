// TableHeader.jsx
const TableHeader = ({ columns }) => {
    return (
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
    );
  };
  
  export default TableHeader;
  
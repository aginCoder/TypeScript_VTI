// TableBody.jsx
const TableBody = ({ data, columns }) => {
    return (
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };
  
  export default TableBody;
  
function BoilingVerdict({ celsius }) {
    if (celsius >= 100) {
      return <p>Nước sôi ở nhiệt độ này.</p>;
    }
    return <p>Nước không sôi ở nhiệt độ này.</p>;
  }
  
  export default BoilingVerdict;
  
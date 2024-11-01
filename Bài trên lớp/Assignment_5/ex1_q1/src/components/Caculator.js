import React, { useState } from 'react';
import BoilingVerdict from './BoilingVerdict';

function Calculator() {
  const [temperature, setTemperature] = useState('');

  const handleChange = (e) => {
    setTemperature(e.target.value);
  };

  return (
    <div>
      <fieldset>
        <legend>Nhập nhiệt độ theo độ C:</legend>
        <input
          type="number"
          value={temperature}
          onChange={handleChange}
        />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    </div>
  );
}

export default Calculator;

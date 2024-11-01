import React from 'react';

const FahrenheitInput = ({ fahrenheit, onFahrenheitChange }) => {
    return (
        <div className="input-group">
            <label>Độ F:</label>
            <input 
                type="number" 
                value={fahrenheit} 
                onChange={(e) => onFahrenheitChange(e.target.value)} 
            />
        </div>
    );
};

export default FahrenheitInput;

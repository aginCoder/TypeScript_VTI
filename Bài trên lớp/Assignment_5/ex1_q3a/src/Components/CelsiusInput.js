import React from 'react';

const CelsiusInput = ({ celsius, onCelsiusChange }) => {
    return (
        <div className="input-group">
            <label>Độ C:</label>
            <input 
                type="number" 
                value={celsius} 
                onChange={(e) => onCelsiusChange(e.target.value)} 
            />
        </div>
    );
};

export default CelsiusInput;

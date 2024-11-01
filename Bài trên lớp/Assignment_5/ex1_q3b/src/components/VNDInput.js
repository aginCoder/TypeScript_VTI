import React from 'react';

const VNDInput = ({ vndAmount, onVndChange }) => {
    return (
        <input
            type="number"
            value={vndAmount}
            onChange={onVndChange}
            placeholder="Nhập số tiền VND"
            style={{ padding: '10px', margin: '10px' }}
        />
    );
};

export default VNDInput;

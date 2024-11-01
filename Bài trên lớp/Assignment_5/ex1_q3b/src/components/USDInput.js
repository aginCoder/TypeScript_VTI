import React from 'react';

const USDInput = ({ usdAmount, onUsdChange }) => {
    return (
        <input
            type="number"
            value={usdAmount}
            onChange={onUsdChange}
            placeholder="Nhập số tiền USD"
            style={{ padding: '10px', margin: '10px' }}
        />
    );
};

export default USDInput;

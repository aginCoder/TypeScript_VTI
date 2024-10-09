import React, { useState } from 'react';

const CurrencyConverter = () => {
    const [vndAmount, setVndAmount] = useState('');
    const [usdAmount, setUsdAmount] = useState('');
    
    const conversionRate = 24835; 

    const handleVndChange = (e) => {
        const value = e.target.value;
        setVndAmount(value);
        setUsdAmount((value / conversionRate).toFixed(2));
    };

    const handleUsdChange = (e) => {
        const value = e.target.value;
        setUsdAmount(value);
        setVndAmount((value * conversionRate).toFixed(2));
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Chuyển đổi tiền tệ</h2>
            <input
                type="number"
                value={vndAmount}
                onChange={handleVndChange}
                placeholder="Nhập số tiền VND"
                style={{ padding: '10px', margin: '10px' }}
            />
            <h3>
                Kết quả:
                { ` ${(vndAmount / conversionRate).toFixed(2)} USD`}
            </h3>
        </div>
    );
};

export default CurrencyConverter;

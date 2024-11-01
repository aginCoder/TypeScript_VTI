import React, { useState } from 'react';
import VNDInput from './VNDInput';
import USDInput from './USDInput';

const CurrencyConverter = () => {
    const [vndAmount, setVndAmount] = useState('');
    const [usdAmount, setUsdAmount] = useState('');

    const conversionRate = 24835; 

    const handleVndChange = (e) => {
        const value = e.target.value;
        setVndAmount(value);
        if (!isNaN(value) && value !== '') {
            setUsdAmount((value / conversionRate).toFixed(2));
        } else {
            setUsdAmount(''); 
        }
    };

    const handleUsdChange = (e) => {
        const value = e.target.value;
        setUsdAmount(value);
        if (!isNaN(value) && value !== '') {
            setVndAmount((value * conversionRate).toFixed(0));
        } else {
            setVndAmount(''); 
        }
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Chuyển đổi tiền tệ</h2>
            <VNDInput vndAmount={vndAmount} onVndChange={handleVndChange} />
            <USDInput usdAmount={usdAmount} onUsdChange={handleUsdChange} />
            <h3>
                Kết quả: 
                <span>{`${vndAmount} VND = ${(vndAmount / conversionRate).toFixed(2)} USD`}</span>
            </h3>
            <h3>
                Kết quả: 
                <span>{`${usdAmount} USD = ${(usdAmount * conversionRate).toFixed(0)} VND`}</span>
            </h3>
        </div>
    );
};

export default CurrencyConverter;

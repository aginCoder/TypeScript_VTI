import React, { useState } from 'react';
import CelsiusInput from './Components/CelsiusInput';
import FahrenheitInput from './Components/FahrenheitInput';

const Converter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (value) => {
        setCelsius(value);
        if (value !== '') {
            const f = (value * 9/5) + 32;
            setFahrenheit(f.toFixed(2));
        } else {
            setFahrenheit('');
        }
    };

    const handleFahrenheitChange = (value) => {
        setFahrenheit(value);
        if (value !== '') {
            const c = (value - 32) * 5/9;
            setCelsius(c.toFixed(2));
        } else {
            setCelsius('');
        }
    };

    return (
        <div className="converter-container">
            <h1>Convert</h1>
            <CelsiusInput celsius={celsius} onCelsiusChange={handleCelsiusChange} />
            <FahrenheitInput fahrenheit={fahrenheit} onFahrenheitChange={handleFahrenheitChange} />
        </div>
    );
};

export default Converter;

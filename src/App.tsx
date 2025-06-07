import React, { useState } from 'react';
export default function App() {
  const [conversion, setConversion] = useState({ rupee: 0, dollar: 0 });
  const handleChangeRupee = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const conversionRate = 0.012; // in dollars
    const convertedRes = parseFloat(value) * conversionRate;
    setConversion({ ...conversion, rupee: parseFloat(value), dollar: convertedRes });
  };
  const handleChangeDollar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const conversionRate = 88.26; // in dollars
    const convertedRes = parseFloat(value) * conversionRate;
    setConversion({ ...conversion, dollar: parseFloat(value), rupee: convertedRes });
  };
  return (
    <>
      <p>currency converter</p>
      <label>INR: </label>
      <input
        type="number"
        value={conversion.rupee}
        onChange={handleChangeRupee}
      />
      <br />
      <br />
      <label>USD: </label>
      <input
        type="number"
        value={conversion?.dollar}
        onChange={handleChangeDollar}
      />
    </>
  );
}

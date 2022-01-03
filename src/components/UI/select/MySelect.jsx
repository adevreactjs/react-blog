import React from 'react';

export default function MySelect({ options, defaultValue, value, onChange }) {
  return (
    <div style={{ marginTop: '15px' }}>
      <select value ={value}
      onChange={e => onChange(e.target.value)}>
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}

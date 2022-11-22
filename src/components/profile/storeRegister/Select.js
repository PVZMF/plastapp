import React from 'react';

const Select = ({ childern, classname, title, onChange, items }) => {
  return (
    <div className={classname}>
      <select onChange={onChange}>
          <option>{title}</option>

          {items?.map((item, index) => (
            <option key={index} value={item.name}>{item.name}</option>
        ))}
      </select>
        <span>{childern}</span>
    </div>
  )
}

export default Select
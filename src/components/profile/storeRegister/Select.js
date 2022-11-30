import React from 'react';

const Select = ({ childern, form, classname,name, title, onChange, items, child }) => {
  return (
    <div className={classname}>
      <select onChange={onChange} name={name} form={form}>
          <option>{title}</option>
          {items?.map((item, index) => (
            <option key={child? item: item.name} value={child? item: item.name}>{child? item: item.name}</option>
        ))}
      </select>
        <span>{childern}</span>
    </div>
  )
}

export default Select
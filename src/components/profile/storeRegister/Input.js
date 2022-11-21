import React from 'react';

const Input = ({ childern, classname, placeholder, value, onChange, type }) => {
  return (
    <div className={classname}>
        <input type={type ? type : 'text'} placeholder={placeholder} value={value} onChange={onChange} />
        <span>{childern}</span>
        {type === 'file' && <h5>{placeholder}</h5>}
    </div>
  )
}

export default Input
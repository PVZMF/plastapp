import React from 'react'
import style from './careerOpportunity.module.css'

const Input = ({ title, icon, type, placeholder }) => {
  return (
    <div className={style.inputBox}>
        <label>{title}</label>
        <div className={style.input}>
          <span>{icon}</span>
          <input type={type ? type : 'text'} placeholder={placeholder} />
          {type === 'file' && <h5><span>{icon}</span> {placeholder}</h5>}
        </div>
    </div>
  )
}

export default Input
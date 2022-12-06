import React from "react";
import style from "./careerOpportunity.module.css";

const Input = ({ name, title, icon, type, placeholder, register }) => {
  return (
    <div className={style.inputBox}>
      <label>{title}</label>
      <div className={style.input}>
        <span>{icon}</span>
        <input
          name={name}
          type={type ? type : "text"}
          placeholder={placeholder}
          required="required"
        />
        {type === "file" && (
          <h5>
            <span>{icon}</span> {placeholder}
          </h5>
        )}
      </div>
    </div>
  );
};

export default Input;

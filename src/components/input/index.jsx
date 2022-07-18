import React from "react";
import "./index.scss";

export default function Input(props) {
  const className = [props.className];

  const checkElementRender = (element) => {
    if (element === "input") {
      return (
        <input
          placeholder={props.placeholder}
          name={props.name}
          className={`input ${className.join(" ")}`}
          style={props.style}
          {...props}
        />
      );
    } else if (element === "textArea") {
      return (
        <textarea
          placeholder={props.placeholder}
          name={props.name}
          className={`input ${className.join(" ")}`}
          style={props.style}
          {...props}
        />
      );
    }
  };

  return (
    <div className='input-container'>
      <label htmlFor={props.label} className='input-label'>
        {props.label}
      </label>
      {checkElementRender(props.element)}
      {props.children}
    </div>
  );
}

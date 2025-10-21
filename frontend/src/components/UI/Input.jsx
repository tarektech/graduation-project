import React from 'react';
import styles from './Input.module.css';

function Input(props) {
  return (
    <div className={styles.inputcontainer}>
      <label htmlFor="" className={styles.label}>
        {props.label}
      </label>
      <input
        type={props.type}
        className={props.className}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}

export default Input;

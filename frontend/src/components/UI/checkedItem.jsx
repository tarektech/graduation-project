import React from 'react';
import styles from './checkedItem.module.css';
import { TiDelete } from 'react-icons/ti';

function CheckedItem(props) {
  return (
    <div className={`${styles.container} `}>
      <div className={`${styles.innercontainer}`}>
        <TiDelete
          className={`${styles.deleteitem}`}
          onClick={() => props.handleRemove(props.id)}
        />
        <img
          className={`${styles.img} `}
          src={props.src}
          alt={props.itemname}
        />
        <p>{props.itemname}</p>
      </div>
      <span>{props.itemprice}</span>
    </div>
  );
}

export default CheckedItem;

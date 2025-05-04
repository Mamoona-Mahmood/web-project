import React from 'react';
import styles from './PopUp.module.css';

const PopUp = ({ text, buttonText, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <p className={styles.text}>{text}</p>
        <button className={styles.button} onClick={onClose}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PopUp;

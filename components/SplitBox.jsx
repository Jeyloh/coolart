import React from 'react';
import content from '../content/no.json';
import styles from '../styles/SplitBox.module.css';

export default function SplitBox() {
  return (
    <div className={styles.SplitBox}>
      <div className={styles.SplitBoxAbsolute}>
        <div>
          <h2>{content.home.philosophy.title}</h2>
          <p>{content.home.philosophy.content}</p>
        </div>
        <div>
          <h2>{content.home.contact.title}</h2>
          <p>{content.home.contact.mail}</p>
          <p>{content.home.contact.phone}</p>
        </div>
      </div>
      <div className={styles.SplitBoxFirst}></div>
      <div className={styles.SplitBoxSecond}></div>
    </div>
  );
}

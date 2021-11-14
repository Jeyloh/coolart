import Head from 'next/head';
import styles from '../styles/Footer.module.css';
import React from 'react';
import Link from 'next/link';
import content from '../content/no.json';

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Wrapper}>
        <div className={styles.Content}>
          <h1>{content.footer.title}</h1>
          <p>{content.footer.main}</p>
        </div>

        <div className={styles.FooterLinks}>
          <h2>{content.footer.links.title}</h2>
          <ul>
            {content.footer.links.list.map(({ text, href }) => (
              <li key={text}>
                <a href={href}>{text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

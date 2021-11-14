import styles from '../styles/Header.module.css';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import content from '../content/no.json';
import Image from 'next/image';
import logo from '../public/images/logo/coolart-logo-border.png';
import cn from 'classnames';

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window) {
        const setScroll = window.scrollY > 20;
        if (setScroll !== hasScrolled) {
          setHasScrolled(setScroll);
        }
      }
    }
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setHasScrolled, hasScrolled]);
  return (
    <header
      className={cn(styles.Header, {
        [styles.scrolled]: hasScrolled,
      })}
    >
      <div className={styles.Wrapper}>
        <div
          className={cn(styles.HeaderIcon, {
            [styles.scrolled]: hasScrolled,
          })}
        >
          <Image objectFit={'contain'} src={logo} alt='coolart logo' />
        </div>
        <navigation className={styles.Navigation}>
          {content.header.nav.map(({ text, href }) => (
            <Link key={text} href={href}>
              {text}
            </Link>
          ))}
        </navigation>
      </div>
    </header>
  );
}

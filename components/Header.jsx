import styles from '../styles/Header.module.css';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import content from '../content/no.json';
import Image from 'next/image';
import logo from '../public/images/logo/coolart-logo-border.png';
import cn from 'classnames';

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function Header({ currentHref }) {
  const size = useWindowSize();

  return size.width > 768 ? (
    <WebHeader currentHref={currentHref} />
  ) : (
    <MobileHeader currentHref={currentHref} />
  );
}

const WebHeader = ({ currentHref }) => {
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
            <span
              key={text}
              className={currentHref === href ? styles.CurrentNav : styles.Nav}
            >
              <Link href={href}>{text}</Link>
            </span>
          ))}
        </navigation>
      </div>
    </header>
  );
};

const MobileHeader = ({ currentHref }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header
      className={cn(styles.Header, {
        [styles.scrolled]: true,
      })}
    >
      <div className={styles.Wrapper}>
        <div
          className={cn(styles.HeaderIcon, {
            [styles.scrolled]: true,
          })}
        >
          <Image objectFit={'contain'} src={logo} alt='coolart logo' />
        </div>
        <button
          onClick={handleMenu}
          className={cn(styles.MenuButton, {
            [styles.open]: menuOpen,
          })}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <navigation
          className={cn(styles.MobileNavigation, {
            [styles.MobileNavigationOpen]: menuOpen,
          })}
        >
          {content.header.nav.map(({ text, href }) => (
            <span
              key={text}
              className={currentHref === href ? styles.CurrentNav : styles.Nav}
            >
              <Link href={href}>{text}</Link>
            </span>
          ))}
          <button
            className={styles.CloseMenuNav}
            onClick={() => setMenuOpen(false)}
          >
            Close
          </button>
        </navigation>
      </div>
    </header>
  );
};

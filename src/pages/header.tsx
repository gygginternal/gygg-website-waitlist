import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';

const PrivacyHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          GYGG
        </Link>
      </div>
    </header>
  );
};

export default PrivacyHeader;

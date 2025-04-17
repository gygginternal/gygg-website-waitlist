"use client";

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  return (
    <header className={`${styles.header} ${isMobileMenuOpen ? styles.menuOpen : ""}`}>
      <Link href="/" className={styles.logo}>
        GYGG
      </Link>

      <nav className={styles.nav}>
        <ul className={styles.desktopNav}>
          <li>
            <Link href="#how-it-works">How it works</Link>
          </li>
          <li>
            <Link href="#survey">Survey</Link>
          </li>
        </ul>
      </nav>

      {/* Hide this button when menu is open */}
      <Link href="#waitlist" className={styles.cta}>
        Get Early Access
      </Link>

      {/* Hamburger Menu Button */}
      <button className={styles.menuButton} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
};

export default Header;

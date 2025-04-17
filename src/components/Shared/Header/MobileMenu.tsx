"use client";

import React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <nav className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <button className={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>
        <Link href="#how-it-works" className={styles.navLink} onClick={onClose}>
          How it works
        </Link>
        <Link href="#survey" className={styles.navLink} onClick={onClose}>
          Survey
        </Link>
        <Link href="#waitlist" className={styles.cta} onClick={onClose}>
          Get Early Access
        </Link>
      </nav>
      {isOpen && <div className={styles.backdrop} onClick={onClose}></div>}
    </>
  );
};

export default MobileMenu;

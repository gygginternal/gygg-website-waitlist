"use client";

import React, { useState } from 'react';
import styles from './Waitlist.module.css';

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email) || isLoading) return; // Prevent multiple submissions

    setIsLoading(true);

    try {
      await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      // Always show success message, even if API fails
      alert("Form submitted successfully!");
      setEmail("");
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.waitlistContainer}>
      <div className={styles.waitlistBox}>
        <div className={styles.textContainer}>
            <h2 className={styles.title}><span className={styles.word}>Redefining</span> Work, One Task at a Time.</h2>
            <p className={styles.subtitle}>We are on a mission to redefine how people work and connect, offering a secure platform where individuals can find help with everyday tasks or earn extra income.</p>
        </div>
        <p className={styles.notificationText}>Get notified on Release</p>
        <form onSubmit={handleSubmit} className={styles.emailSignup}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.emailInput}
            required
          />
          <button type="submit" className={styles.signupButton} disabled={isLoading}>
            {isLoading ? "Submitting..." : "Get early access"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Waitlist;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  const [email, setEmail] = useState("");
  const [timeLeft, setTimeLeft] = useState("");
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

  useEffect(() => {
    const targetDate = new Date(2025, 4, 3);
    targetDate.setHours(targetDate.getHours() - 4);
  
    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
  
      if (difference <= 0) {
        setTimeLeft("00:00:00");
        return;
      }
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
  
      setTimeLeft(`${days} : ${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`);
    };
  
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles.communityBox}>
            <div className={styles.imageGroup}>
              <Image src="/assets/circle1.jpg" alt="Community member 1" width={32} height={32} className={styles.circleImage} />
              <Image src="/assets/circle2.jpg" alt="Community member 2" width={32} height={32} className={styles.circleImage} />
              <Image src="/assets/circle3.jpg" alt="Community member 3" width={32} height={32} className={styles.circleImage} />
            </div>
            <p className={styles.communityText}>Join the community on our waitlist</p>
          </div>
        </div>

        <h1 className={styles.title}>
          Redefining <span className={styles.word}>Work</span>,<br /> One <span className={styles.word}>Task</span> at a Time
        </h1>

        <p className={styles.subtitle}>Earn extra income by doing things you enjoy or get things done affordably and effortlessly.</p>

        <p className={styles.notifyText}>Get notified on the Release</p>

        <form onSubmit={handleSubmit} className={styles.emailSignup}>
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.emailInput} required />
          <button type="submit" className={styles.signupButton} disabled={isLoading}>
            {isLoading ? "Submitting..." : "Get early access"}
          </button>
        </form>

        <div className={styles.features}>
          <div className={styles.feature}><Image src="/assets/tick.svg" alt="Tick" width={16} height={16} /><span>Powered by AI</span></div>
          <div className={styles.feature}><Image src="/assets/tick.svg" alt="Tick" width={16} height={16} /><span>Diverse Service Marketplace</span></div>
          <div className={styles.feature}><Image src="/assets/tick.svg" alt="Tick" width={16} height={16} /><span>Safe and Hassle-free</span></div>
        </div>

        <div className={styles.noSpam}><Image src="/assets/information.svg" alt="Information" width={16} height={16} /><span>No Spam, Only the good stuff!</span></div>

        <div className={styles.timer}><span>{timeLeft}</span></div>
      </div>
    </div>
  );
};

export default Hero;

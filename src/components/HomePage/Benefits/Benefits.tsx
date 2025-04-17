"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Benefits.module.css';

// Data Array for Cards
const benefitsData = [
  {
    icon: "/assets/clock.svg",
    alt: "Clock",
    title: "Early Access",
    description: "Get priority access to Gygg and start benefiting before the official launch.",
  },
  {
    icon: "/assets/percentage.svg",
    alt: "Discount",
    title: "Exclusive Perks",
    description: "Unlock special discounts and perks reserved for early adopters.",
  },
  {
    icon: "/assets/talk.svg",
    alt: "Feedback",
    title: "Shape the Platform",
    description: "Share feedback to influence Gygg's features and experience.",
  },
];

const Benefits: React.FC = () => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    elementsRef.current.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.classList.add(styles.animate);
        }, index * 100); // Stagger the animations
      }
    });
  }, []);

  return (
    <div className={styles.benefits}>
      <div ref={el => { if (el) elementsRef.current[0] = el }} className={styles.wrapper}> 
        <div className={styles.header}>
          <Image src="/assets/question-mark.svg" alt="Gift Icon" width={24} height={24} />
          <span>Benefits</span>
        </div>
      </div>

      <h2 ref={el => { if (el) elementsRef.current[1] = el }} className={styles.subtitle}>
        Why Join the <span className={styles.word}>Waitlist?</span>
      </h2>

      <p ref={el => { if (el) elementsRef.current[2] = el }} className={styles.subText}>
        Unlock unique perks, priority access, and special privileges by joining Gygg as an early adopter.
      </p>

      <div className={styles.cardContainer}>
        {benefitsData.map((benefit, index) => (
          <div 
            key={index} 
            ref={el => { if (el) elementsRef.current[index + 3] = el }} 
            className={styles.card}
          >
            <div className={styles.cardHeader}>
              <Image src={benefit.icon} alt={benefit.alt} width={20} height={20} />
              <h3>{benefit.title}</h3>
            </div>
            <p className={styles.cardDescription}>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;

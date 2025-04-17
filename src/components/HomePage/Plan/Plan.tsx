"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { animate } from "@motionone/dom";
import styles from './Plan.module.css';

const timelineData = [
  {
    phase: "Phase 1",
    title: "Early access launch with core features",
    description: "Get exclusive early access to Gygg's core platform—designed to connect users seamlessly, enhance productivity, and unlock flexible earning opportunities. Be among the first to shape the future of work."
  },
  {
    phase: "Phase 2",
    title: "Community Features (badges, leaderboards, milestones)",
    description: "Join our vibrant community with engaging features like badges, leaderboards, and milestones. Celebrate accomplishments, connect with like-minded individuals, and grow your network in a supportive ecosystem."
  },
  {
    phase: "Phase 3",
    title: "AI-Powered Matching Insights Tailored to Your Needs",
    description: "Leverage Gygg's AI-driven insights for precision matching between task seekers and task providers. Enjoy personalized recommendations based on preferences, location, and skillset, ensuring the perfect fit every time."
  },
  {
    phase: "Phase 4",
    title: "Advanced Tools for Tracking Earnings and Performance",
    description: "Take charge with advanced tools to track earnings, task performance, and reviews. Make informed decisions and optimize your experience while earning more and working smarter."
  }
];

const Plan: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineRef.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const phaseBox = entry.target.querySelector(`.${styles.phaseBox}`);
            const timelineItem = entry.target;
            
            if (phaseBox) {
              phaseBox.classList.add(styles.visible);
            }
            
            animate(
              timelineItem,
              { opacity: [0, 1], y: [50, 0] },
              { duration: 0.6, easing: 'ease-out' }
            );
          }
        });
      }, { threshold: 0.1 });

      const timelineItems = timelineRef.current.querySelectorAll(`.${styles.timelineItem}`);
      timelineItems.forEach((item) => observer.observe(item));

      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className={styles.plan}>
      <div className={styles.planContainer}>
        <div className={styles.planBox}>
          <Image
            src="/assets/question-mark.svg"
            alt="Question Mark"
            width={24}
            height={24}
          />
          <span>Plan</span>
        </div>
      </div>
      
      <h1 className={styles.title}>
        What&apos;s Coming <span className={styles.word}>Next?</span>
      </h1>
      
      <p className={styles.subtitle}>We&apos;re just getting started. Here&apos;s what to expect</p>
      
      <div className={styles.timeline} ref={timelineRef}>
        {timelineData.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.phaseBox}>{item.phase}</div>
            <div className={styles.timelineDotContainer}>
              <div className={styles.timelineDot}></div>
            </div>
            <div className={styles.timelineContent}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            {index < timelineData.length - 1 && <div className={styles.timelineLine}></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;

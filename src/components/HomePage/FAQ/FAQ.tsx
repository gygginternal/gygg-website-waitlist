"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./FAQ.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Gygg?",
    answer:
      "Gygg is a community-driven marketplace connecting people who need help with tasks to those offering their skills and time to earn flexible income.",
  },
  {
    question: "How does Gygg work?",
    answer:
      "Simply sign up as a task seeker or provider, create or browse tasks, and let Gygg's smart matching system connect you with the right opportunities.",
  },
  {
    question: "What makes Gygg different from other platforms?",
    answer:
      "Gygg focuses on personality, affordability, trust, and flexibility, offering a secure, user-friendly platform powered by AI to ensure the best matches and a seamless experience.",
  },
  {
    question: "What types of tasks can I find or offer on Gygg?",
    answer:
      "Gygg supports a wide range of tasks, from home repairs to creative projects, administrative support, tutoring, and more—there's something for everyone.",
  },
  {
    question: "How does Gygg ensure trust and security?",
    answer:
      "Gygg uses AI-driven verification and secure payment systems to create a safe and reliable environment for all users.",
  },
  {
    question: "Can I set my own prices for tasks?",
    answer:
      "Yes! With the help of AI recommendations, task providers can set their own rates, giving you full control over your work and earnings.",
  },
  {
    question: "Why should I join Gygg's waitlist?",
    answer:
      "By joining our waitlist, you'll gain early access to the platform, exclusive perks, and the chance to help shape the future of work.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faq}>
      <div className={styles.faqContainer}>
        <div className={styles.faqBox}>
          <Image
            src="/assets/question-mark.svg"
            alt="Question Mark"
            width={24}
            height={24}
          />
          <span>FAQ</span>
        </div>
      </div>
      
      <h1 className={styles.title}>
        Frequently Asked <span className={styles.word}>Questions</span>
      </h1>
      
      <div className={styles.questionList}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.questionItem}>
            <div 
              className={styles.questionHeader}
              onClick={() => toggleQuestion(index)}
            >
              <div className={styles.questionText}>{item.question}</div>
              <div className={styles.plusIcon}>
                {openIndex === index ? '-' : '+'}
              </div>
            </div>
            <div className={`${styles.answer} ${openIndex === index ? styles.open : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
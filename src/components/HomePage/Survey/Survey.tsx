"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Survey.module.css";

const Survey: React.FC = () => {
  return (
    <motion.div 
      className={styles.survey}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className={styles.surveyContainer}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className={styles.surveyBox}>
          <Image
            src="/assets/question-mark.svg"
            alt="Question Mark"
            width={24}
            height={24}
          />
          <span>Survey</span>
        </div>
      </motion.div>

      <motion.h1 
        className={styles.title}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Help Shape the <span className={styles.word}>Future of Work</span>
      </motion.h1>

      <motion.p 
        className={styles.subtitle}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Your feedback matters! Take part in our survey to shape a platform
        designed for your needs—whether you need help with tasks or want to earn
        extra income. Make your voice heard and help create something
        revolutionary.
      </motion.p>

      <motion.div 
        className={styles.typeformContainer}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <iframe
          src="https://tally.so/r/wvdP60"
          className={styles.typeformEmbed}
        ></iframe>
      </motion.div>
    </motion.div>
  );
};

export default Survey;

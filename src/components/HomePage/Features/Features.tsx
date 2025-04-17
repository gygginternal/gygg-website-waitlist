"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import styles from "./Features.module.css";

const featureData = [
  {
    title: "Smart Search",
    description: "With the help of AI, we will connect you effortlessly by matching your needs, budget and location to the right person or task.",
    image: "/assets/feature-image-1.jpg"
  },
  {
    title: "More Than Just Odd Jobs",
    description: "Beyond odd jobs, we connect skilled individuals with those needing help. Earn doing what you love or find reliable help for tasks you can't handle alone.",
    image: "/assets/feature-image-2.jpg"
  },
  {
    title: "Affordable and Secure",
    description: "Gygg ensures trust with fair pricing, easy navigation and secure user verification. Showcase your skills and earn or find reliable assistance for any task.",
    image: "/assets/feature-image-3.jpg"
  },
];

const Features: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % featureData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleFeatureClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <motion.div 
      ref={ref} 
      className={styles.features}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className={styles.wrapper}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className={styles.featuresBox}>
          <Image src="/assets/question-mark.svg" alt="Question Mark" width={24} height={24} />
          <span>Features</span>
        </div>
      </motion.div>

      <motion.h1 
        className={styles.title}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        We&apos;re Here to <span className={styles.word}>Revolutionize</span> the Gig <span className={styles.word}>Economy for Adults Aged 50+</span>
      </motion.h1>

      <motion.p 
        className={styles.subtitle}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Gygg is transforming how people aged 50 and above earn by empowering their communities with opportunities to work flexibly and pursue their passions. Together, we&apos;re shaping the future of work—where everyone thrives.
      </motion.p>

      <div className={styles.content}>
        <motion.div 
          className={styles.featureList}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {featureData.map((feature, index) => (
            <motion.div 
              key={index} 
              className={styles.featureItem}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * (index + 1), duration: 0.8 }}
              onClick={() => handleFeatureClick(index)}
            >
              <div className={styles.featureLine}></div>
              <div className={styles.featureContent}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className={styles.imageSection}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Image
            src={featureData[currentImageIndex].image}
            alt="Feature illustration"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Features;

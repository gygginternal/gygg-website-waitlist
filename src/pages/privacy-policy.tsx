import React from "react";
import PrivacyHeader from "@/pages/header"; // Custom header for privacy
import type { Metadata } from "next";
import styles from "./privacy-policy.module.css";
import Footer from "@/pages/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "GYGG website",
};

const PrivacyPolicy = () => {
  return (
    <>
    <PrivacyHeader /> 
    <div className={styles.container}>
      
      <main className={styles.content}>
        <h1>Privacy Policy</h1>
        <p>
          <strong>Effective Date:</strong> 19th December 2024
        </p>
        <p>
          Gygg (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy
          and ensuring that your personal information is handled in a safe and
          responsible manner. This Privacy Policy outlines how we collect, use,
          and protect the information you provide when visiting our landing page
          and participating in our waitlist or survey.
        </p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li>First Name</li>
          <li>Last Name</li>
          <li>Email Address</li>
        </ul>
        <p>No sensitive personal data, such as payment details or addresses, will be collected at this stage.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We collect and use your information for the following purposes:</p>
        <ul>
          <li>
            <strong>Waitlist Management:</strong> To notify you about updates,
            product launches, or exclusive early access opportunities.
          </li>
          <li>
            <strong>Survey Analysis:</strong> To gather insights to improve our
            services and better understand user needs.
          </li>
          <li>
            <strong>Marketing Communication:</strong> To send relevant updates,
            promotional content, and announcements regarding Gygg, only if you
            have opted in.
          </li>
          <li>
            <strong>Platform Optimization:</strong> To improve our offerings
            based on aggregated and anonymized data.
          </li>
        </ul>
        <p>We do not sell or share your personal information with third parties for marketing purposes.</p>

        <h2>3. Data Storage and Protection</h2>
        <ul>
          <li>
            <strong>Data Storage:</strong> Your data will be stored securely on
            servers located in [Region/Cloud Provider, e.g., North America, AWS,
            or Google Cloud].
          </li>
          <li>
            <strong>Security Measures:</strong> We use encryption, secure
            servers, and regular security updates to protect your information.
          </li>
          <li>
            <strong>Data Retention:</strong> Your personal data will be retained
            as long as necessary to fulfill the purposes outlined in this
            policy, or as required by law.
          </li>
        </ul>

        <h2>4. Sharing Your Information</h2>
        <p>Your data will not be shared with third parties, except:</p>
        <ul>
          <li>
            <strong>Service Providers:</strong> To trusted partners who assist
            us in operating our website and services (e.g., email delivery
            services), who are bound by strict confidentiality agreements.
          </li>
          <li>
            <strong>Legal Compliance:</strong> If required by law or to protect
            our rights, property, or safety.
          </li>
        </ul>

        <h2>5. Your Rights</h2>
        <p>Depending on your location, you may have the following rights regarding your data:</p>
        <ul>
          <li>
            <strong>Access:</strong> Request a copy of the data we hold about
            you.
          </li>
          <li>
            <strong>Correction:</strong> Request corrections to any inaccurate
            information.
          </li>
          <li>
            <strong>Deletion:</strong> Request deletion of your personal data
            (subject to legal obligations).
          </li>
          <li>
            <strong>Opt-Out:</strong> Unsubscribe from marketing communications
            by clicking the &quot;unsubscribe&quot; link in our emails.
          </li>
        </ul>
        <p>
          To exercise these rights, please contact us at{" "}
          <a href="mailto:hello@gygg.co" className={styles.link}>
            hello@gygg.co
          </a>
        </p>

        <h2>6. Cookies and Tracking</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your
          browsing experience and collect analytics about site usage.
        </p>
        <ul>
          <li>
            <strong>Analytics:</strong> We use tools like Google Analytics to
            understand how users interact with our website.
          </li>
          <li>
            <strong>Opt-Out:</strong> You can disable cookies through your
            browser settings.
          </li>
        </ul>

        <h2>7. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites, such as
          Typeform. We are not responsible for the privacy practices of these
          sites. Please review their privacy policies before submitting
          information.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy to reflect changes in our practices
          or legal requirements. Any updates will be posted on this page, and
          the &quot;Effective Date&quot; will be updated.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or
          your data, please contact us at{" "}
          <a href="mailto:hello@gygg.co" className={styles.link}>
            hello@gygg.co
          </a>
        </p>
      </main>
    </div>
    <Footer />
    </>
  );
};

export default PrivacyPolicy;

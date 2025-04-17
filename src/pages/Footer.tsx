import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from "next/link";
import Script from 'next/script';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Script
                id="active-campaign-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `(function(e,t,o,n,p,r,i){ 
                        e.visitorGlobalObjectAlias=n; 
                        e[n]=e[n]||function(){ 
                            (e[n].q=e[n].q||[]).push(arguments) 
                        }; 
                        e[n].l=(new Date).getTime(); 
                        r=t.createElement("script"); 
                        r.src=o; 
                        r.async=true; 
                        i=t.getElementsByTagName("script")[0]; 
                        i.parentNode.insertBefore(r,i);
                    })(window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");
                    vgo('setAccount', '802266531');
                    vgo('setTrackByDefault', true);
                    vgo('process');`
                }}
            />
            
            <div className={styles.topSection}>
                <div className={styles.line}>
                    <a href="mailto:hello@gygg.co" className={styles.mailButton}>
                        <Image src='/assets/mail.svg' alt="Mail" width={20} height={20} />
                        hello@gygg.co
                    </a>
                </div>
            </div>
            <div className={styles.middleSection}>
                <Link href="/" passHref legacyBehavior>
                    <a style={{ textDecoration: 'none' }}>
                        <div className={styles.logo}>GYGG</div>
                    </a>
                </Link>
            </div>
            <div className={styles.bottomSection}>
                <div className={styles.line}></div>
                <div className={styles.bottomContent}>
                    <span>@GYGG - All rights reserved</span>
                    <Link href="/privacy-policy">
                        <span style={{ color: "#666", cursor: "pointer" }}> Privacy Policy</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

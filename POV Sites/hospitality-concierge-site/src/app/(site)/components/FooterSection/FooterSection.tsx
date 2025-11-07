import styles from "./FooterSection.module.css";

/**
 * Footer summarises navigation and external resources for quick follow-up.
 */

export function FooterSection() {
  return (
    <footer className={styles["footer-section"]}>
      <div className={styles["footer-section__brand"]}>
        <span className={styles["footer-section__logo"]}>LumaStay Concierge</span>
        <p className={styles["footer-section__tagline"]}>
          Elevating every stay with AI-guided hospitality inside Salesforce.
        </p>
      </div>

      <div className={styles["footer-section__links"]}>
        <div className={styles["footer-section__column"]}>
          <span className={styles["footer-section__column-title"]}>Solutions</span>
          <a href="#journey">Associate Journey</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#contact">Implementation Playbook</a>
        </div>
        <div className={styles["footer-section__column"]}>
          <span className={styles["footer-section__column-title"]}>Resources</span>
          <a href="mailto:lumastay.solutions@example.com">Schedule a Workshop</a>
          <a href="https://www.salesforce.com/" target="_blank" rel="noreferrer">
            Salesforce for Hospitality
          </a>
          <a href="https://slack.com/" target="_blank" rel="noreferrer">
            Digital HQ for Operations
          </a>
        </div>
      </div>

      <div className={styles["footer-section__meta"]}>
        <span>© {new Date().getFullYear()} LumaStay Hospitality. All rights reserved.</span>
        <span>Crafted for the Hospitality Innovation Summit.</span>
      </div>
    </footer>
  );
}


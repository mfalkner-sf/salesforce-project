import styles from "./CallToActionSection.module.css";

/**
 * CTA surfaces the primary commercial actions teams should take after reviewing the microsite.
 */

export function CallToActionSection() {
  return (
    <section className={styles["cta-section"]} id="contact">
      <div className={styles["cta-section__aura"]} aria-hidden="true" />
      <div className={styles["cta-section__body"]}>
        <p className={styles["cta-section__eyebrow"]}>Next Steps</p>
        <h2 className={styles["cta-section__title"]}>Ready to host the future of hospitality?</h2>
        <p className={styles["cta-section__description"]}>
          Schedule a working session with the LumaStay consulting team to map your employee
          journeys, align data readiness, and activate a concierge pilot inside Salesforce in
          under six weeks.
        </p>
        <div className={styles["cta-section__actions"]}>
          <a
            className={styles["cta-section__primary"]}
            href="mailto:lumastay.solutions@example.com"
          >
            Book a Design Workshop
          </a>
          <a className={styles["cta-section__secondary"]} href="#capabilities">
            Download the Capability Overview
          </a>
        </div>
      </div>
    </section>
  );
}


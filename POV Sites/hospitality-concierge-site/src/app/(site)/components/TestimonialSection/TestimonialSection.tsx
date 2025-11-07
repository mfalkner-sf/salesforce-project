import Image from "next/image";
import styles from "./TestimonialSection.module.css";

/**
 * Testimonial provides social proof for stakeholders preparing for executive reviews.
 */

export function TestimonialSection() {
  return (
    <section className={styles["testimonial-section"]}>
      <div className={styles["testimonial-section__card"]}>
        <Image
          src="/images/concierge-avatar.svg"
          alt="Headshot of Maya Chen, VP of Guest Experience"
          width={88}
          height={88}
          className={styles["testimonial-section__avatar"]}
        />
        <blockquote className={styles["testimonial-section__quote"]}>
          “Our Concierge Agent is now the first teammate every associate greets. Tasks that
          consumed hours each shift are quietly handled, letting the team stage magical
          moments for guests.”
        </blockquote>
        <cite className={styles["testimonial-section__cite"]}>
          <span className={styles["testimonial-section__name"]}>Maya Chen</span>
          <span className={styles["testimonial-section__role"]}>
            VP, Guest Experience · LumaStay Hospitality
          </span>
        </cite>
      </div>
    </section>
  );
}


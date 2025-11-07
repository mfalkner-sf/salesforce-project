import Image from "next/image";
import { ReactNode } from "react";
import styles from "./HeroSection.module.css";

/**
 * Defines the shape of the feature capsules displayed beneath the hero headline.
 * Keeping the type explicit ensures we do not render partial capsule content.
 */
type FeatureCapsule = {
  id: string;
  icon: ReactNode;
  label: string;
};

const featureCapsules: FeatureCapsule[] = [
  {
    id: "prep",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className={styles["hero-section__capsule-icon"]}
      >
        <defs>
          <linearGradient id="prepGradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop stopColor="#8c6fff" offset="0%" />
            <stop stopColor="#37d8ff" offset="100%" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="10" fill="url(#prepGradient)" opacity="0.4" />
        <path
          d="M10 11h12M10 21h12M10 16h7"
          stroke="#f7f8ff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="23" cy="16" r="1.5" fill="#f7f8ff" />
      </svg>
    ),
    label: "Proactive Trip Prep",
  },
  {
    id: "capture",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className={styles["hero-section__capsule-icon"]}
      >
        <defs>
          <linearGradient id="captureGradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop stopColor="#4de1ff" offset="0%" />
            <stop stopColor="#ff4fd8" offset="100%" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="10" fill="url(#captureGradient)" opacity="0.32" />
        <path
          d="M11 20.5v-9a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 21 11.5V20"
          stroke="#f7f8ff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M11 19h10.5a1.5 1.5 0 0 1 0 3H13a2 2 0 0 1-2-2Z"
          fill="#f7f8ff"
          opacity="0.85"
        />
      </svg>
    ),
    label: "Agentic Data Capture",
  },
  {
    id: "nudges",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className={styles["hero-section__capsule-icon"]}
      >
        <defs>
          <linearGradient id="nudgesGradient" x1="0%" x2="120%" y1="0%" y2="120%">
            <stop stopColor="#ff9bff" offset="0%" />
            <stop stopColor="#6291ff" offset="100%" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="10" fill="url(#nudgesGradient)" opacity="0.38" />
        <path
          d="M21 11.5 14.5 16l6.5 4.5"
          stroke="#f7f8ff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 11.5v9"
          stroke="#f7f8ff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Intelligent Nudges",
  },
  {
    id: "growth",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className={styles["hero-section__capsule-icon"]}
      >
        <defs>
          <linearGradient id="growthGradient" x1="0%" x2="100%" y1="100%" y2="0%">
            <stop stopColor="#2ec4b6" offset="0%" />
            <stop stopColor="#ffd166" offset="100%" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="10" fill="url(#growthGradient)" opacity="0.34" />
        <path
          d="M12 20l3.5-4 2 2 4.5-5"
          stroke="#f7f8ff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M10 10h12v12H10z" stroke="#f7f8ff" strokeWidth="1.5" opacity="0.55" />
      </svg>
    ),
    label: "Portfolio Growth",
  },
  {
    id: "clients",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className={styles["hero-section__capsule-icon"]}
      >
        <defs>
          <linearGradient id="clientsGradient" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop stopColor="#8e6bff" offset="0%" />
            <stop stopColor="#52eeff" offset="100%" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="10" fill="url(#clientsGradient)" opacity="0.35" />
        <circle cx="16" cy="14" r="4" fill="rgba(247, 248, 255, 0.9)" />
        <path
          d="M10.5 22.5c.9-2.7 3.1-4.5 5.5-4.5s4.6 1.8 5.5 4.5"
          stroke="#1c1f54"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Guest 360 Insights",
  },
];

export function HeroSection() {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles["hero-section__orbital"]} aria-hidden="true">
        <div className={styles["hero-section__halo"]} />
        <Image
          src="/images/concierge-avatar.svg"
          alt="Portrait of LumaStay concierge lead"
          width={320}
          height={320}
          priority
          className={styles["hero-section__portrait"]}
        />
        <Image
          src="/images/ai-companion.svg"
          alt=""
          width={140}
          height={140}
          className={styles["hero-section__companion"]}
        />
        <div className={styles["hero-section__badge"]}>
          <span className={styles["hero-section__badge-title"]}>Day in the Life</span>
          <span className={styles["hero-section__badge-subtitle"]}>Concierge Agent</span>
        </div>
      </div>

      <div className={styles["hero-section__content"]}>
        <p className={styles["hero-section__eyebrow"]}>LumaStay Hospitality · Concierge AI</p>
        <h1 className={styles["hero-section__title"]}>
          Partners accelerate guest delight with concierge-grade agents.
        </h1>
        <p className={styles["hero-section__subtitle"]}>
          Empower every associate with an intelligent Salesforce assistant that knows your
          property, anticipates guest needs, and orchestrates service flawlessly before,
          during, and after every stay.
        </p>
        <div className={styles["hero-section__cta-row"]}>
          <a className={styles["hero-section__primary-cta"]} href="#journey">
            Preview the Employee Journey
          </a>
          <a className={styles["hero-section__secondary-cta"]} href="#capabilities">
            Explore Capabilities
          </a>
        </div>
      </div>

      <div className={styles["hero-section__feature-rail"]}>
        {featureCapsules.map((capsule) => (
          <div key={capsule.id} className={styles["hero-section__capsule"]}>
            {capsule.icon}
            <span className={styles["hero-section__capsule-label"]}>{capsule.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}


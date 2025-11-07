import styles from "./CapabilitiesSection.module.css";

type Capability = {
  id: string;
  name: string;
  description: string;
  highlights: string[];
};

/**
 * Capabilities outline the architectural pillars of the concierge solution,
 * enabling rapid customization by swapping the data driving each card.
 */
const capabilities: Capability[] = [
  {
    id: "knowledge",
    name: "Property Knowledge Graph",
    description:
      "A living context model connects rooms, amenities, loyalty profiles, and on-property teams so the Concierge Agent answers with confidence.",
    highlights: [
      "Auto-ingests brand standards & SOPs",
      "Learns from every resolved guest case",
      "Surfaces micro-moments for upsell",
    ],
  },
  {
    id: "automation",
    name: "Agentic Automation",
    description:
      "Secure workflows inside Salesforce execute on behalf of the associate, booking amenities, logging tasks, and orchestrating collaborators.",
    highlights: [
      "One-click service recovery journeys",
      "Interleaves with Flow, Omni-Channel, and Mobile",
      "Guardrails keep humans in approval loop",
    ],
  },
  {
    id: "insight",
    name: "360º Guest Insight Loop",
    description:
      "Signals stream back into analytics so operations sees what guests value, where bottlenecks occur, and how each property performs.",
    highlights: [
      "Real-time service health dashboards",
      "Predictive staffing recommendations",
      "Closed-loop satisfaction measurement",
    ],
  },
];

export function CapabilitiesSection() {
  return (
    <section className={styles["capabilities-section"]} id="capabilities">
      <header className={styles["capabilities-section__header"]}>
        <span className={styles["capabilities-section__eyebrow"]}>Core Ingredients</span>
        <h2 className={styles["capabilities-section__title"]}>
          Build a concierge that works the way hospitality teams serve.
        </h2>
        <p className={styles["capabilities-section__subtitle"]}>
          LumaStay Concierge Agent fuses curated knowledge, guardrailed automation, and live
          performance insight so every employee can operate like the property&apos;s best host.
        </p>
      </header>

      <div className={styles["capabilities-section__grid"]}>
        {capabilities.map((capability) => (
          <article key={capability.id} className={styles["capabilities-section__card"]}>
            <div className={styles["capabilities-section__card-beam"]} aria-hidden="true" />
            <h3 className={styles["capabilities-section__card-title"]}>{capability.name}</h3>
            <p className={styles["capabilities-section__card-description"]}>
              {capability.description}
            </p>
            <ul className={styles["capabilities-section__list"]}>
              {capability.highlights.map((highlight) => (
                <li key={highlight} className={styles["capabilities-section__list-item"]}>
                  <span className={styles["capabilities-section__bullet"]} aria-hidden="true">
                    <svg viewBox="0 0 16 16">
                      <defs>
                        <linearGradient id="capBullet" x1="0%" x2="100%" y1="0%" y2="100%">
                          <stop offset="0%" stopColor="#52eeff" />
                          <stop offset="100%" stopColor="#ff4fd8" />
                        </linearGradient>
                      </defs>
                      <circle cx="8" cy="8" r="6.5" fill="url(#capBullet)" />
                    </svg>
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}


import styles from "./JourneySection.module.css";

type JourneyStep = {
  id: string;
  title: string;
  time: string;
  description: string;
  outcome: string;
};

/**
 * Journey steps mirror a concierge associate's workflow so stakeholders can
 * understand where AI support lands across the guest lifecycle.
 */
const journeySteps: JourneyStep[] = [
  {
    id: "arrival",
    title: "Arrival Pulse",
    time: "07:15 • Lobby",
    description:
      "The Concierge Agent syncs overnight travel updates, flags VIP arrivals, and stages welcome amenities automatically in Salesforce Service Cloud.",
    outcome: "Associates greet by name with tailored surprises ready at check-in.",
  },
  {
    id: "midstay",
    title: "Mid-Stay Sensing",
    time: "13:05 • Pool Deck",
    description:
      "Associates capture voice notes, and the agent structures them into service tasks while nudging maintenance and spa teams on the guest's preferences.",
    outcome: "Issues are resolved before guests notice, and upgrades land right on cue.",
  },
  {
    id: "departure",
    title: "Departure Encore",
    time: "21:30 • Salesforce Mobile",
    description:
      "The agent composes a personalized farewell message, schedules loyalty follow ups, and shares a digest of on-property spend to the sales team.",
    outcome:
      "Guest sentiment soars and sales engages with precise context for the next stay.",
  },
];

export function JourneySection() {
  return (
    <section className={styles["journey-section"]} id="journey">
      <div className={styles["journey-section__headline"]}>
        <span className={styles["journey-section__eyebrow"]}>Concierge Journey</span>
        <h2 className={styles["journey-section__title"]}>
          A luminous day in the life of LumaStay associates.
        </h2>
        <p className={styles["journey-section__subtitle"]}>
          Salesforce becomes the command center where frontline teams and the Concierge
          Agent co-orchestrate each touchpoint, keeping employees focused on guests instead
          of swivel-chair tasks.
        </p>
      </div>

      <ol className={styles["journey-section__timeline"]}>
        {journeySteps.map((step, index) => (
          <li key={step.id} className={styles["journey-section__step"]}>
            <div className={styles["journey-section__marker"]}>
              <span className={styles["journey-section__number"]}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className={styles["journey-section__beam"]} />
            </div>
            <div className={styles["journey-section__body"]}>
              <header className={styles["journey-section__header"]}>
                <h3 className={styles["journey-section__step-title"]}>{step.title}</h3>
                <span className={styles["journey-section__time"]}>{step.time}</span>
              </header>
              <p className={styles["journey-section__description"]}>{step.description}</p>
              <div className={styles["journey-section__outcome"]}>
                <span className={styles["journey-section__outcome-label"]}>Outcome</span>
                <span className={styles["journey-section__outcome-copy"]}>{step.outcome}</span>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}


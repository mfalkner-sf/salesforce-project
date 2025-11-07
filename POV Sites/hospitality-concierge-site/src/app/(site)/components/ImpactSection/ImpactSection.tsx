import styles from "./ImpactSection.module.css";

type ImpactMetric = {
  id: string;
  value: string;
  label: string;
  detail: string;
};

/**
 * Impact metrics help quantify outcomes from field pilots; values can be
 * replaced with live Salesforce analytics once integrated.
 */
const impactMetrics: ImpactMetric[] = [
  {
    id: "resolution",
    value: "42%",
    label: "Faster Issue Resolution",
    detail: "Concierge Agent resolves maintenance and amenity tasks before guests escalate.",
  },
  {
    id: "upsell",
    value: "18%",
    label: "Lift in Experience Upsells",
    detail: "Guided nudges prompt timely upgrades, late check-outs, and on-property bookings.",
  },
  {
    id: "satisfaction",
    value: "94",
    label: "NPS with Loyal Guests",
    detail: "Guests enjoy consistent service regardless of staffing or property occupancy.",
  },
];

/**
 * Integration list names the Salesforce products required for the solution.
 */
const integrations: string[] = [
  "Salesforce Service & Data Cloud",
  "Einstein 1 Studio & Prompt Builder",
  "Flow Orchestration & Omni-Channel",
  "Digital HQ for Slack + Mobile",
];

export function ImpactSection() {
  return (
    <section className={styles["impact-section"]}>
      <div className={styles["impact-section__panel"]}>
        <span className={styles["impact-section__eyebrow"]}>Impact at Scale</span>
        <h2 className={styles["impact-section__title"]}>
          Intelligent concierge performance you can measure.
        </h2>
        <p className={styles["impact-section__description"]}>
          LumaStay benchmarks show how AI-guided service uplifts every property. Metrics stay
          connected to Salesforce dashboards so leaders can steer, optimize, and celebrate
          their teams.
        </p>
      </div>

      <div className={styles["impact-section__metrics"]}>
        {impactMetrics.map((metric) => (
          <article key={metric.id} className={styles["impact-section__metric-card"]}>
            <div className={styles["impact-section__metric-value"]}>{metric.value}</div>
            <h3 className={styles["impact-section__metric-label"]}>{metric.label}</h3>
            <p className={styles["impact-section__metric-detail"]}>{metric.detail}</p>
          </article>
        ))}
      </div>

      <aside className={styles["impact-section__integrations"]}>
        <h3 className={styles["impact-section__integrations-title"]}>
          Native Salesforce integrations
        </h3>
        <ul className={styles["impact-section__integrations-list"]}>
          {integrations.map((integration) => (
            <li key={integration} className={styles["impact-section__integrations-item"]}>
              <span aria-hidden="true">▹</span>
              {integration}
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}


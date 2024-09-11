import styles from '../styles/dashboard.module.css';

export default function ChartSection({ title, children }) {
  return (
    <div className={styles.chartSection}>
      <h2 className={styles.chartTitle}>{title}</h2>
      <div className={styles.chart}>
        {children}
      </div>
    </div>
  );
}

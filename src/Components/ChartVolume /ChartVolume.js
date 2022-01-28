import styles from "./styles.module.css";
export default function ChartVolume() {
  const info = [15, 29, 12, 26, 10, 24, 8, 23, 7, 21, 5, 19, 3, 17, 1, 15, 29];
  return (
    <div className={styles.container}>
      <div className={styles.graphInfo}>
        <div className={styles.volume}>
          <div>Volume 24H</div>
          <div>$1.07b</div>
        </div>
        <div className={styles.timeWrapper}>
          <div>Day</div>
          <div>Week</div>
          <div>Month</div>
        </div>
      </div>
      <div>
        <img src="../../Group 310.png"></img>
      </div>

      <div className={styles.info_}>
        {info.map((x, j) => (
          <div className={styles.info} key={j}>
            {x}
          </div>
        ))}
      </div>
    </div>
  );
}

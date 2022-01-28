import styles from "./styles.module.css";
const info = [15, 29, 12, 26, 10, 24, 8, 23, 7, 21, 5, 19, 3, 17, 1, 15, 29];

export default function ChartTVL() {
  return (
    <div className={styles.container}>
      <div className={styles.volume}>
        <div>TVL</div>
        <div>$4.24b</div>
        <div>Nov 13, 2021 (UTC)</div>
      </div>
      <img src={"../../Group 309.png"}></img>
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

import styles from "./styles.module.css";

function TradeOverView({ vol, volChange, fee, feeChange, tVL, tVLChange }) {
  return (
    <>
      <div>
        <div className={styles.hero}>Overview</div>
      </div>
      <div className={styles.parameterContainer}>
        {Parameter("Volume 24H:", vol, volChange)}
        {Parameter("Fees 24H:", fee, feeChange)}
        {Parameter("TVL:", tVL, tVLChange)}
      </div>
    </>
  );
}

function Parameter(label, value, change) {
  return (
    <div className={styles.parameter}>
      <p>
        {label} <em>{"$" + value}</em>
      </p>
      <div className={change >= 0 ? styles.changePos : styles.changeNeg}>
        <img
          src={change >= 0 ? "Vector 239.png" : "Vector 238.png"}
          style={change >= 0 ? { paddingBottom: "1px" } : { padding: "0px" }}
        ></img>
        {Math.abs(change)}%
      </div>
    </div>
  );
}

export default TradeOverView;

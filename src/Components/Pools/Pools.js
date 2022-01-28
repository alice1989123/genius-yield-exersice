import styles from "./styles.module.css";

const tokenData = [
  ["USDC/ETH", 544.48, 71.48, 251.42],
  ["WBTC/ETH", 544.48, 71.48, 251.42],
  ["WBTC/ENS", 544.48, 71.48, 251.42],
  ["ETH/USDT", 544.48, 71.48, 251.42],
  ["USDC/USDT", 544.48, 71.48, 251.42],
  ["FRAX/USDT", 544.48, 71.48, 251.42],
  ["WBTC/USDC", 544.48, 71.48, 251.42],
  ["DAI/ETH", 544.48, 71.48, 251.42],
  ["ETH/PAX", 544.48, 71.48, 251.42],
  ["DAI/PAX", 544.48, 71.48, 251.42],
];

export default function Pools() {
  return (
    <div className={styles.container}>
      <div className={styles.TopTokensList}>
        <h2 className={styles.title}>Pools</h2>
        <div className={styles.tokensData}>
          <div className={styles.TokensDataHeader}>
            <div className={styles.tokensName}>
              <div style={{ marginRight: "30px" }}>#</div> <div>Pool</div>
            </div>

            <div className={styles.tokensDataHeaders}>
              <div>Price</div>
              <div>Volume 24 H</div>
              <div>Volume 7D</div>
            </div>
          </div>
          <img src={"../../Vector 228.svg"}></img>
          {tokenData.map((x, j) => (
            <TokenRow
              num={[j + 1]}
              tokenName={x[0]}
              price={x[1]}
              vol24h={x[2]}
              vol7d={x[3]}
              key={j}
            />
          ))}
        </div>
        <PageChange />
      </div>
    </div>
  );
}

function TokenRow({ num, tokenName, price, vol24h, vol7d }) {
  return (
    <>
      <div className={styles.tokenCointainer}>
        <div className={styles.tokenName}>
          <div>{num}</div>
          <img src={`../../${num}_.png`} />
          <div>{tokenName}</div>
          <div>0.3%</div>
        </div>
        <div className={styles.tokenData}>
          <div>{`$ ${(Math.round(price * 100) / 100).toFixed(2)}`}</div>
          <div>{`$${vol24h}b`}</div>
          <div>{`$${vol7d}`}</div>
        </div>
      </div>
      <img src={"../../Vector 228.svg"}></img>
    </>
  );
}

function PageChange() {
  return (
    <div className={styles.pageChangeContainer}>
      <div>
        <img src={"../../Vector 242.png"} />
      </div>
      <img src={"../../Line 4.png"} />

      <div> 1 or 5</div>
      <img src={"../../Line 4.png"} />

      <div>
        <div>
          <img src={"../../Vector 241 (1).png"} />
        </div>
      </div>
    </div>
  );
}

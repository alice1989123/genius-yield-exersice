import styles from "./styles.module.css";

const tokenData = [
  ["Ethereum", "ETH", 3.81, 2.27, 1.48, 1.42],
  ["USDC Coin", "USDC", 1.0, 0.0, 1.11, 717.98],
  ["Wraped BTC", "WBTC", 47.95, -2.38, 78.94, 356.44],
  ["Tether", "USDT", 3.81, 2.27, 1.48, 1.42],
  ["Dai Stablecoin", "DAI", 1, 0.0, 1.11, 717],
  ["Frax", "FRAX", 47.95, -2.38, 78.94, 356.44],
  ["Fei USD", "FEI", 3.81, 2.27, 1.48, 1.42],
  ["Binance USD", "BUSD", 1.0, 0.0, 1.11, 717.98],
  ["Paxos Standard", "PAX", 47.95, -2.38, 78.94, 356.44],
  ["Ethereum Name Service", "ENS", 47.95, -2.38, 78.94, 356.44],
];

export default function TopTokens() {
  return (
    <div className={styles.container}>
      <div className={styles.TopTokensList}>
        <h2 className={styles.title}>Top Tokens</h2>
        <div className={styles.tokensData}>
          <div className={styles.TokensDataHeader}>
            <div className={styles.tokensName}>
              <div style={{ marginRight: "30px" }}>#</div> <div>Name</div>
            </div>

            <div className={styles.tokensDataHeaders}>
              <div>Price</div>
              <div>Price Change</div>
              <div>Volume 24 H</div>
              <div>TVL</div>
            </div>
          </div>
          <img src={"../../Vector 228.svg"}></img>
          {tokenData.map((x, j) => (
            <TokenRow
              num={[j + 1]}
              tokenName={x[0]}
              tokenAbr={x[1]}
              price={x[2]}
              priceChange={x[3]}
              volume={x[4]}
              tVL={x[5]}
              key={j}
            />
          ))}
        </div>
        <PageChange />
      </div>
    </div>
  );
}

function TokenRow({
  num,
  tokenName,
  tokenAbr,
  price,
  priceChange,
  volume,
  tVL,
}) {
  return (
    <>
      <div className={styles.tokenCointainer}>
        <div className={styles.tokenName}>
          <div>{num}</div>
          <img src={`../../${num}.png`} />
          <div>{tokenName}</div>
          <div>{`(${tokenAbr})`}</div>
        </div>
        <div className={styles.tokenData}>
          <div>{`$ ${(Math.round(price * 100) / 100).toFixed(2)}`}</div>
          <PriceSign priceChange={priceChange.toFixed(2)} />{" "}
          <div>{`$${volume}b`}</div>
          <div>{`$${tVL}`}</div>
        </div>
      </div>
      <img src={"../../Vector 228.svg"}></img>
    </>
  );
}

function PriceSign({ priceChange }) {
  if (priceChange > 0) {
    return (
      <div>
        {<img src="../../Vector 240 (Stroke).png" />}
        {`${(Math.round(Math.abs(priceChange) * 100) / 100).toFixed(2)}%`}
      </div>
    );
  }
  if (priceChange == 0) {
    return (
      <div>
        {`${(Math.round(Math.abs(priceChange) * 100) / 100).toFixed(2)}%`}
      </div>
    );
  } else {
    return (
      <div style={{ color: "#EE598A" }}>
        {<img src="../../Vector 240 (Stroke) (1).png" />}
        {`${Math.abs(priceChange)}%`}
      </div>
    );
  }
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
          <img src={"../../Vector 241.png"} />
        </div>
      </div>
    </div>
  );
}

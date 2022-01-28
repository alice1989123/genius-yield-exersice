import NavBar from "./Components/NavBar/NavBar";
import TradeOverView from "./Components/Tradeoverview/TradeOverview";
import TopTokens from "./Components/TopTokens/TopTokens";
import Pools from "./Components/Pools/Pools";
import ChartTVL from "./Components/ChartTVL/ChartTVL";
import ChartVolume from "./Components/ChartVolume /ChartVolume";
function App() {
  return (
    <>
      <div className="container-center-horizontal">
        <div className="charts">
          <div className="highlight2"></div>

          <div className="highlight"></div>
          <div className="selling">Selling</div>
          <ChartTVL />
          <ChartVolume />
          <NavBar />
          <TradeOverView
            vol={1.81}
            volChange={7.28}
            fee={3.34}
            feeChange={-2.51}
            tVL={4.24}
            tVLChange={0.01}
          />
          <TopTokens />
          <Pools />
        </div>
      </div>
    </>
  );
}

export default App;

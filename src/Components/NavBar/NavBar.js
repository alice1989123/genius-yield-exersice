import { logDOM } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./styles.module.css";
export default function NavBar() {
  return (
    <>
      <div className={styles.navContainer}>
        <Logo className={styles.logo} />
        <nav>
          <ul className={styles.navigationBar}>
            <li>Swap</li>
            <li>Pool</li>
            <li>Vote</li>
            <li className={styles.selectedPage}>Charts</li>
          </ul>
        </nav>
        <div className={styles.accountDetails}>
          <div className={styles.balanceContainer}>
            <div>0.05545</div> <div>ADA</div>
          </div>
          <div className={styles.addressContainer}>
            <div>0x4cB6...cdBG</div> <img src={"Union.svg"}></img>
          </div>
        </div>
      </div>
      <img src="./Vector 74.svg"></img>
    </>
  );
}

function Logo() {
  return (
    <div className={styles.logo}>
      <img src="../../Logo.png" />
    </div>
  );
}

import React from "react";
import styles from "../styles/components/AccountCard.module.css";

export default function AccountCard(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.leftCol}>
          <div>
            <p className={styles.number}>{props.accounts}</p>
          </div>
          <div>
            <h5>New Accounts Created</h5>
            <p>Last update on {props.accountsDate}</p>
          </div>
        </div>

        <div className={styles.rightCol}>
          <div>
            <p className={styles.number}>{props.views}</p>
          </div>
          <div>
            <h5>Increased Pageviews</h5>
            <p>Last update on {props.viewsDate}</p>
          </div>
        </div>
      </div>
    </>
  );
}

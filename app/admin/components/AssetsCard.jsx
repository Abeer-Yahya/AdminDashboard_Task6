import React from "react";
import BarChart from "./BarChart";
import styles from "../styles/components/AssetsCard.module.css";

export default function AssetsCard(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.col1}>
          <div>
            <p className={styles.title}>Your Assets</p>
          </div>
          <p>
            <strong>{props.totalAssets}</strong> Total Assets on Portal
          </p>

          <div>
            <BarChart />
          </div>
        </div>

        <div className={styles.col2}>
          <h5>{props.uploadedAssets}</h5>
          <p>Uploaded to Date</p>
        </div>

        <div className={styles.col3}>
          <img src="/upload-icon.svg" alt="upload to cloud icon" />
          <h5>
            Drag and drop your files here <br /> or
          </h5>
          <button>Browse</button>
        </div>
      </div>
    </>
  );
}

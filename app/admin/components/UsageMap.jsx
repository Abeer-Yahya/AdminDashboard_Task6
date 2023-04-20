"use client";
import React from "react";
import Map from "./Map";
import styles from "../styles/components/UsageMap.module.css";
function UsageMap(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.col1}>
          <h2>Portal Usage</h2>
          <Map />
        </div>

        <div className={styles.col2}>
          <div>
            <p className={styles.number}>{props.worldwide}</p>
            <h5 className={styles.title}>Worldwide Increase</h5>
            <p className={styles.date}>Last update on {props.date}</p>
          </div>
          <div>
            <p className={styles.number}>{props.domestic}</p>
            <h5 className={styles.title}>Domestic Increase</h5>
            <p className={styles.date}>Last update on {props.date}</p>
          </div>
          <p className={styles.link}>
            <a href="#">
              <span>View</span> Downloads
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
export default UsageMap;

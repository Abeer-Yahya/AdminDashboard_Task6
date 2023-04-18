import React from "react";
import styles from "../styles/components/AdminDetails.module.css";

export default function AdminDetails(props) {
  return (
    <div className={styles.card}>
      <div className={styles.admin}>
        <h2>{props.name}</h2>
        <span>{props.role}</span>
      </div>
      <div>
        <p>
          Your users added <a href="#">{props.assets} new assets</a> since your
          last login on {props.date}
        </p>
      </div>
    </div>
  );
}

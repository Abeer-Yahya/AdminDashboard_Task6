import React from "react";
import styles from "../styles/components/NotificationsCard.module.css";

export default function NotificationsCard(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.col}>
          <div>
            <p className={styles.number}>{props.tasks}</p>
          </div>
          <div>
            <h5>Tasks pending</h5>
            <p>{props.tasksOverdue} overdue</p>
          </div>
        </div>

        <div className={styles.col}>
          <div>
            <p className={styles.number}>{props.notifications}</p>
          </div>
          <div>
            <h5>New Notifications</h5>
            <p>{props.notificationsOverdue} overdue</p>
          </div>
        </div>

        <div className={styles.col}>
          <div>
            <p className={styles.number}>{props.requests}</p>
          </div>
          <div>
            <h5>New Requests</h5>
            <p>Since your last login</p>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import styles from "./styles/admin.module.css";
import AdminDetails from "./components/AdminDetails";
import AccountCard from "./components/AccountCard";
import NotificationsCard from "./components/NotificationsCard";
import TrafficChart from "./components/TrafficChart";
import UsageMap from "./components/UsageMap";
import AssetsCard from "./components/AssetsCard";
import PendingCard from "./components/PendingCard";
import MostSearched from "./components/MostSearched";
import MostDownloaded from "./components/MostDownloaded";

export default function AdminDashboard() {
  //Admin Details
  const name = "Mohammed AlNsour";
  const role = "Admin";
  const newAssets = 324;
  const date = "23 Nov 2022";

  //Accounts Statistics Details
  const accounts = 174;
  const accountsDate = "12/06/2022";
  const views = "5%";
  const viewsDate = "12/06/2022";

  //Notifications Card
  const tasks = 62;
  const tasksOverdue = 23;
  const notifications = 13;
  const notificationsOverdue = 23;
  const requests = 21;

  //Assets Card
  const totalAssets = 13458;
  const uploadedAssets = 2870;
  return (
    <main className={styles.adminDashboard}>
      <AdminDetails name={name} role={role} assets={newAssets} date={date} />
      <div className={styles.flexTwo}>
        <AccountCard
          accounts={accounts}
          accountsDate={accountsDate}
          views={views}
          viewsDate={viewsDate}
        />
        <NotificationsCard
          tasks={tasks}
          tasksOverdue={tasksOverdue}
          notifications={notifications}
          notificationsOverdue={notificationsOverdue}
          requests={requests}
        />
      </div>
      <TrafficChart />
      <AssetsCard totalAssets={totalAssets} uploadedAssets={uploadedAssets} />
      {/* 
      <UsageMap />
      <PendingCard />
      <MostSearched />
      <MostDownloaded /> */}
    </main>
  );
}

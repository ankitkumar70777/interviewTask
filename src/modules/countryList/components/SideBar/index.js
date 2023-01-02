import React, { useState } from 'react'
import styles from "./css/sidebar.module.scss";

const SideBar = ({ sidebarState }) => {
  const [masterList, showMasterList] = useState(false);
  const masterListArr = ["Country", "state", "regine", "city"];

  return (
    <div className={styles.sideBar} style={{ "width": sidebarState.showSideBar ? "20rem" : "0rem" }}>
      <div className={styles.mainLogoAndClose}>
        <div className={styles.mainLogo}><img src="https://mario.wiki.gallery/images/thumb/8/8a/New_Super_Mario_Bros._U_Deluxe_Super_Star.png/1200px-New_Super_Mario_Bros._U_Deluxe_Super_Star.png" alt="mainLogo" /></div>
        <span className={`material-symbols-outlined ${styles.closeButton}`} onClick={() => { sidebarState.setShowSideBar(false) }}>
          close
        </span>
      </div>
      <div className={styles.dashboard}>Dashboard</div>
      <div onClick={() => { showMasterList(!masterList) }} className={styles.masters}>Masters
        <span className="material-symbols-outlined">
          arrow_drop_down
        </span>
      </div>
      {
        masterList &&
        masterListArr.map((masterListElement) =>
          <div className={styles.dropdown}>{masterListElement}</div>
        )
      }
    </div>
  )
}

export default SideBar
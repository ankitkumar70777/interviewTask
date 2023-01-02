import React, { useState } from 'react'
import styles from "./css/navbar.module.scss";
import SideBar from '../SideBar';

const NavBar = () => {
  const [showSideBar,setShowSideBar] = useState(false);

  return (
    <>
      <div className={styles.navbar}>
        <div>
          <span className={`${styles.openNavbar} material-symbols-outlined `} onClick={()=>{setShowSideBar(true)}}>
            menu
          </span>
        </div>
        <div>
          <span className={`${styles.logout} material-symbols-outlined`}>
            logout
          </span>
        </div>
      </div>

      <SideBar sidebarState={{showSideBar,setShowSideBar}}/>
    </>
  )
}

export default NavBar
import React from 'react'
import styles from "./css/container.module.scss";
import NavBar from '../components/Navbar';
import CountryTable from './countryTable/CountryTable';

const Container = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <CountryTable />
    </div>
  )
}

export default Container
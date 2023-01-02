import React from 'react'
import styles from "./css/heading.module.scss";

const Heading = () => {
    return (
        <div className={styles.heading}>
            <div><h1>Product List</h1></div>
            <div className={styles.buttonsDiv}>
                <button>Add Country</button>
                <button>Import</button>
                <button>Export to Excel</button>
            </div>
        </div>
    )
}

export default Heading
import React, { useState } from 'react'
import styles from "./css/dataTable.module.scss";
import EditModel from '../editModel';

const DataTable = ({ data }) => {
    const [showModel, setShowModel] = useState(false);
    const [modelData, setModelData] = useState({ title: "", category: "" });
    

    return (
        <>
            <div className={styles.dataTableDiv}>
                <table className={styles.dataTable}>
                    <thead>
                        <tr>
                            <th>Country Code</th>
                            <th>Country Name</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <th className={styles.inputBoxTh}><input type="text" placeholder='search country code' /></th>
                            <th className={styles.inputBoxTh}><input type="text" placeholder='search country name' /></th>
                            <th className={styles.searchButtonTh}><button>Search</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.products.map((product) => {
                                return <tr key={product.id}>
                                    <td>{product.title}</td>
                                    <td>{product.category}</td>
                                    <td className={styles.EditData}>
                                        <span
                                            onClick={() => { setShowModel(true); setModelData({ ...modelData, title: product.title, category: product.category }) }}
                                        >Edit</span></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            {
                showModel && <EditModel setShowModel={setShowModel} modelData={modelData}/>
            }

        </>
    )
}

export default DataTable
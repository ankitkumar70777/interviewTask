import React from 'react'
import styles from "./css/editModel.module.scss";

const EditModel = ({setShowModel,modelData}) => {
    return (
        <div className={styles.editModel}>
            <div className={styles.outerModel}>
                <div className={styles.innerModel}>
                    <div className={styles.topDiv}>
                        <div><h1>Edit Country</h1></div>
                        <div onClick={()=>{setShowModel(false)}}><span className="material-symbols-outlined">
                            close
                        </span></div>
                    </div>
                    <div className={styles.middleDiv}>
                        <div>
                            <div>Country code</div>
                            <div><input type="text" defaultValue={modelData.title}/></div>
                        </div>
                        <div>
                            <div>Country name</div>
                            <div><input type="text" defaultValue={modelData.category}/></div>
                        </div>
                    </div>
                    <div className={styles.bottomDiv}>
                        <div>
                            <button onClick={()=>{setShowModel(false)}}>close </button>
                            <button>submit </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModel
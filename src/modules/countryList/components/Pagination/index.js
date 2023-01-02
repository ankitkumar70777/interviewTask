import React from 'react'
import styles from "./css/pagination.module.scss";

const Pagination = ({ data, dataFetchOptionState }) => {

    const nextPage = () => {
        if (dataFetchOptionState.dataFetchOption.skip < data.total - 3) {
            dataFetchOptionState.setDataFetchOption({ ...dataFetchOptionState.dataFetchOption, skip: data.products[data.products.length - 1].id })
        }
    }

    const prevPage = () => {
        if (dataFetchOptionState.dataFetchOption.skip > 0) {
            dataFetchOptionState.setDataFetchOption({ ...dataFetchOptionState.dataFetchOption, skip: dataFetchOptionState.dataFetchOption.skip - 3 })
        }
    }

    return (
        <div className={styles.pagination}>
            <div className={styles.paginationInDivParent}>
                <div className={styles.paginationInDivChild}>
                    <span className={`material-symbols-outlined ${styles.arrawBackIcon}`} onClick={() => { prevPage() }}>
                        arrow_back_ios
                    </span>

                    <span className={`${styles.previous}`} onClick={() => { prevPage() }}>Previous</span>

                    <span className={`${styles.pageNo}`}>1</span>

                    <span className={`${styles.next}`} onClick={() => { nextPage() }} >
                        Next
                    </span>

                    <span className={`material-symbols-outlined ${styles.arrawNextIcon}`} onClick={() => { nextPage() }}>
                        arrow_forward_ios
                    </span>
                </div>
            </div>

            <div className={styles.paginationNavigation}>Showing {data.products[0].id}-{data.products[data.products.length - 1].id} out of {data.total} result</div>
        </div>
    )
}

export default Pagination
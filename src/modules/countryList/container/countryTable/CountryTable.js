import React, { useEffect, useState } from 'react'
import styles from "./css/countryTable.module.scss";
import Heading from '../../components/Heading';
import DataTable from '../../components/DataTable';
import Pagination from '../../components/Pagination';

const CountryTable = () => {

  const [data, setData] = useState({ products: [{ id: 0 }], total: 0, });
  // console.log("data",data);


  const [dataFetchOption, setDataFetchOption] = useState({ limit: 3, skip: 0 });
  // console.log("dataFetchOption", dataFetchOption);

  useEffect(() => {
    (async () => {
      const result = await fetch(`https://dummyjson.com/products?limit=${dataFetchOption.limit}&skip=${dataFetchOption.skip}`);
      const data = await result.json();
      setData(data.products ? { products: data.products, total: data.total } : {});
    })()

  }, [dataFetchOption])

  return (
    <div className={styles.countryTable}>
      <div className={styles.container}>
        <Heading />
        <DataTable data={data} />
        <Pagination data={data} dataFetchOptionState={{ dataFetchOption, setDataFetchOption }} />
      </div>
    </div>
  )
}

export default CountryTable
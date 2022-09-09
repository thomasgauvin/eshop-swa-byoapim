import Head from 'next/head'
import styles from "../styles/Catalog.module.scss";
import Layout from "../components/Layout";
import { useEffect, useState } from 'react';
import CatalogItem from '../components/CatalogItem';


export default function Catalog(props) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/api/v1/Catalog/cart')
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

  return (
    <Layout>
        <div>
            <section className={styles["esh-catalog-filters"]}>
                <div className={styles["container"]}>
                    <div className={`${styles["esh-catalog-filters-wrapper"]} ${styles["d-flex"]} align-items-end ${styles["mt-3"]}`}>
                        <div className={styles["esh-catalog-filter-wrapper"]}>
                            <label className={`$styles["esh-catalog-label"] ${styles["form-label"]}`}>Brand</label>
                            <select className={`${styles["form-control"]}`} id="brand" >
                                <option>All</option>
                            </select>
                        </div>
                        <div className={styles["esh-catalog-filter-wrapper"]}>
                            <label className={`$styles["esh-catalog-label"] ${styles["form-label"]}`}>Type</label>
                            <select className={`${styles["form-control"]}`} id="type">
                                <option >All</option>
                            </select>
                        </div>
                        <button 
                            type="button" 
                            className="btn btn-primary">APPLY</button>
                    </div>
                </div>
            </section>
            <div style={{margin: "auto", width: "fit-content", padding: "1em"}}>
                Showing 8 of 24 products - Page 1
            </div>
            <div className={`${styles["item-container"]} ${styles["container"]}`}>
                { !items ? 
                    <div>Loading...</div> 
                    :
                    items.map((item) => <CatalogItem CatalogItem={item} key={item.id}/>)
                }
            </div>
        </div>

    </Layout>
  )
}

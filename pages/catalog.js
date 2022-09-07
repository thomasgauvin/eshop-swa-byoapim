import Head from 'next/head'
import styles from "../styles/Catalog.module.scss";
import Layout from "../components/Layout";
import { useEffect, useState } from 'react';
import CatalogItem from '../components/CatalogItem';

var isDev = process.env.NODE_ENV == "development"

export default function Catalog(props) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        if(isDev){
            fetch('https://eshop-swa.azure-api.net/api/v1/Catalog/items')
                .then((res) => res.json())
                .then((data) => {
                    setItems(data);
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        else{
            fetch(isDev ? 'http://localhost:4000/api/v1/Catalog/items' : 'https://eshop-swa.azure-api.net/api/v1/Catalog/items')
                .then((res) => res.json())
                .then((data) => {
                    setItems(data);
                })
                .catch((err) => {
                    console.log(err)
                })
        }

    }, [])

  return (
    <Layout>
        <div>
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

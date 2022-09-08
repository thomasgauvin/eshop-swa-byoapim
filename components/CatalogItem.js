import styles from "../styles/Catalog.module.scss";

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

var isDev = process.env.NODE_ENV == "development"

export default function CatalogItem({ CatalogItem }) {
  return (
    <div style={{width: "16rem", height: "18rem", padding: "1em"}}>
        <img src={CatalogItem.pictureUri} height={"100%"} width={"100%"}></img>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div>{CatalogItem.name}</div>
            <div>{formatter.format(CatalogItem.price)}</div>
        </div>
    </div>
  )
}
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
    <div style={{padding: "1em"}}>
        <div style={{width: "15rem", height: "16rem", position: "relative"}}>
          <img src={CatalogItem.pictureUri} height={"100%"} width={"100%"} style={{objectFit:"cover"}}></img>
        </div>
        <div style={{display: "flex", justifyContent: "space-between", margin: "1em", fontSize:"1.2em"}}>
            <div>{CatalogItem.name}</div>
            <div style={{color:"#f66f61"}}>{formatter.format(CatalogItem.price)}</div>
        </div>
    </div>
  )
}
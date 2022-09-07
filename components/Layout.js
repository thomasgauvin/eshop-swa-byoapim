import Head from 'next/head'
import styles from "../styles/Catalog.module.scss";

export default function Layout({children}) {
  return (
    <div>
        <header className={styles["esh-app-header"]}>
            <div className={styles["container"]}>
                <article className={styles["d-flex align-content-center justify-content-between"]}>
                    <section>
                        <a>
                            <img className={styles["esh-app-header-brand"]} src="assets/images/logo_color.svg" />
                        </a>
                    </section>

                    <section className={styles["d-flex align-content-center justify-content-between"]}>
                        <esh-identity></esh-identity>
                        <esh-basket-status></esh-basket-status>
                    </section>
                </article>
            </div>
            <div className={styles["esh-app-header-promo"]}>
                <span className={styles["esh-app-header-promo-title"]}>All T-SHIRTS</span>
                <span className={styles["esh-app-header-promo-subtitle"]}>On sale this weekend</span>
            </div>

        </header>

        {children}

        <footer className={styles["esh-app-footer"]}>
            <div className={styles["container"]}>
                <article className={styles["d-flex w-100 h-100 justify-content-between align-items-center"]}>

                    <section>
                        <img className={styles["esh-app-footer-brand"]} src="assets/images/logo.svg" />
                    </section>

                    <section>
                        © e-Shoponcontainers. All rights reserved
                    </section>

                </article>
            </div>
        </footer>
    </div>
  )
}

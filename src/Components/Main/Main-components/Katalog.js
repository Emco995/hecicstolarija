import React from "react";
import styles from './Katalog.module.css';
import catalog from './Components Assets/katalog.pdf';

const Katalog = () => {
    return(
        <div className={styles.catalog}>
            <h2>Preuzmi Katalog</h2>
            <a href={catalog}
             download="Example-PDF-document"
             target="_blank"
             rel="noreferrer">
        <button>Preuzmi <i class="fa-solid fa-download fa-shake"></i></button>
      </a>
        </div>
    )
}

export default Katalog
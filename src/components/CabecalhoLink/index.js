import { Link } from "react-router-dom";
import styles from "./CabecalhoLink.module.css";
import { children } from "react";
function CabecalhoLink({ url, children  }) {
    return (
        <Link to={url} className={styles.Link}>
            {children}
        </Link>
    )
}

export default CabecalhoLink;
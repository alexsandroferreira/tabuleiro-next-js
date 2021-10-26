import Bloco from "./Bloco";
import styles from "../styles/Row.module.css";

export default function Row(props) {
    const cont = 0;
    return (
        <div className={styles.row}>
            <Bloco preto={props.preto} />
            <Bloco preto={!props.preto} />
            <Bloco preto={props.preto} />
            <Bloco preto={!props.preto} />
            <Bloco preto={props.preto} />
            <Bloco preto={!props.preto} />
            <Bloco preto={props.preto} />
            <Bloco preto={!props.preto} />
        </div>
    )

}



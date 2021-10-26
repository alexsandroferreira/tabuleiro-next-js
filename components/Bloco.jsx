import styles from "../styles/Bloco.module.css"

export default function Bloco(props) {

    return (

        <div
            style = {{ 
                backgroundColor: props.preto ? "#000" : "#fff"
            }}
            className={styles.bloco}>


        </div>
    )

}
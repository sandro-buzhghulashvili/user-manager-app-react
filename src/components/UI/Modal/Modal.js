import React from "react";

import styles from "./Modal.module.css"

function Modal(props) {
    return (
        <div className={styles["modal"]}>
            <div className={styles["modal-warning"]}>
                <h1>Invalid input</h1>
                <p>Please enter a valid name and age (non-empty values)</p>
                <div className={styles["modal-button"]}>
                    <button onClick={props.quitModal}>Okay</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
import React, {useState} from "react";

import Modal from "../UI/Modal/Modal"
import styles from "./UserInput.module.css"

function UserInput(props) {
    const [formData,setFormData] = useState({})
    const [nextId,setNextId] = useState(props.nextId + 1)
    const [isValid,setIsValid] = useState(true)

    function quitModalHandler() {
        setIsValid(true)
    }

    function inputHandler(e) {
        const {name,value,type} = e.target
        setFormData(prevValue => {
            return {
                ...prevValue,
                [name] : type === "number" ? Number(value) : value
            }
        })
    }
    function submitHandler(e) {
        e.preventDefault()
        setNextId(prevId => prevId + 1)
        if(!formData.name || formData.name.trim().length === 0) {
            setIsValid(false)
            return
        } else if(!formData.age) {
            setIsValid(false)
            return
        }
        const orderedFormData = {
            ...formData,
            id : nextId
        }
        props.onAddNewUser(orderedFormData)
    }

    return (
        <form className={styles["user-input"]} onSubmit={submitHandler}>
        {!isValid && <Modal
        quitModal = {quitModalHandler}
        />}
            <div className={styles["input-group"]}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="name" onChange={inputHandler}/>
            </div>
            <div className={styles["input-group"]}>
                <label htmlFor="age">Age(years)</label>
                <input type="number" min="0" id="age" name="age" onChange={inputHandler}/>
            </div>
            <button type="submit" className={styles["submit-button"]}>Add User</button>
        </form> 
    )
}

export default UserInput
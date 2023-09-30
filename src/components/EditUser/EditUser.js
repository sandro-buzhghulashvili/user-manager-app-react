import React, {useState} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import styles from "./EditUser.module.css"

function EditUser(props) {
    const [updatedUserData,setUpdatedUserData] = useState({
        name : props.userData.name,
        age : props.userData.age,
        id : props.userData.id
    })
    function inputHandler(e) {
        const {name,value,type} = e.target
        setUpdatedUserData(prevData => {
            return {
                ...prevData,
                [name] : type === "number" ? Number(value) : value,
            }
        })
    }
    
    return (
        <div className={styles["user-update"]}>
            <div className={styles["input-group"]}>
                <label htmlFor="updatedName">Name</label>
                <input id="updatedName" name="name" type="text" onChange={inputHandler} value={updatedUserData.name}/>
            </div>
            <div className={styles["input-group"]}>
                <label htmlFor="updatedAge" >Age</label>
                <input id="updatedAge" name="age" type="number" min="1" onChange={inputHandler} value={updatedUserData.age}/>
            </div>
            <button type="button" onClick={() => props.saveUser(updatedUserData)}><FontAwesomeIcon icon={icon({name: 'check', style: 'solid'})} /></button>
        </div>
    )
}

export default EditUser
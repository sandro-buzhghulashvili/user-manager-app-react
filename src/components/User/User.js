import React, {useState} from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {icon } from '@fortawesome/fontawesome-svg-core/import.macro' 
import EditUser from "../EditUser/EditUser"
import styles from "./User.module.css"

function User(props) {
    const [updatingUser,setUpdatingUser] = useState(props.updatingUser)

    function deleteUser(user) {
        props.onDeleteUser(user)
    }
    function updateUser(user) {
        setUpdatingUser(prevValue => !prevValue)
        if(user.name) {
            props.onUpdateUser(user)
        }
    }

    return (
        <div className={styles["user"]}>
            {updatingUser && <EditUser
            saveUser = {updateUser}
            userData = {{name : props.name, age : props.age,id : props.id}}
            />}
            <div className={styles["user-inner"]}>
                <h3>{props.name} ({props.age} years old)</h3>
                <button type="button" onClick={() => deleteUser(props.id)}><FontAwesomeIcon icon={icon({name: 'trash', style: 'solid'})} /></button>
                <button type="button" onClick={updateUser}><FontAwesomeIcon icon={icon({name: 'edit', style: 'solid'})} /></button>
            </div>
        </div>
    )
}

export default User
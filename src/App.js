import React, {useState} from "react";

import User from "./components/User/User";
import UserInput from "./components/UserInput/UserInput";
import "./App.css"

function App() {
    const [usersData,setUsersData] = useState([
        {
            name : "Max",
            age : 33,
            id : 1
        },
        {
            name : "Sandro",
            age : 16,
            id : 2
        }
    ])

    function addNewUser(newUser) {
        setUsersData(prevData => {
            return [
                ...prevData,
                newUser
            ]
        })
    }

    function deleteUser(user) {
        setUsersData(prevData => {
            return prevData.filter(data => data.id !== user)
        })
    }

    function updateUser(user) {
        setUsersData(usersData.map(data => {
            if(user.id === data.id) {
                return {
                    ...data,
                    ...user
                }
            }
            return data
        }))
    }


    const allUsers = usersData.map(user => {
        return (
            <User
            name = {user.name}
            age = {user.age}
            id = {user.id}
            key = {user.id}
            onDeleteUser = {deleteUser}
            updatingUser = {false}
            onUpdateUser = {updateUser}
            />
        )
    })

    return (
        <main>
            <UserInput
            onAddNewUser = {addNewUser}
            nextId = {allUsers.length}
            />
            {allUsers}
        </main>
    )
}

export default App
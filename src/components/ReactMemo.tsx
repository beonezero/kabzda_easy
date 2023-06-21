import React from "react"
import {useState} from "react";

export default {
    title: "React.memo demo"
}

const Counter = (props: {count: number}) => {
    console.log("Counter")
    return <div>{props.count}</div>
}

type usersType = {
    users: Array<string>
}

const UsersSecret = (props: usersType) => {
    console.log("UsersSecret")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const[counter, setCounter] = useState(0)
    const[users, setUsers] = useState(["Yauheni", "Sophia", "Eva"])

    const addUser = () => {
        setUsers(["Something " + new Date().getTime(), ...users])
    }

    return <>
            <button onClick={() => setCounter(counter + 2)}>+</button>
            <button onClick={addUser}>add user</button>
            <Counter count={counter}/>
            <Users users={users}/>
    </>
}
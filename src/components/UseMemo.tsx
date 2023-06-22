import React, {useMemo, useState} from "react"

export default {
    title: "useMemo"
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a ; i++ ){
            let fake = 0
            while(fake < 1000000000) {
                fake++
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b ; i++ ){
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
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

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")
    const[counter, setCounter] = useState(0)
    const[users, setUsers] = useState(["Yauheni", "Sophia", "Eva"])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    const addUser = () => {
        setUsers(["Something " + new Date().getTime(), ...users])
    }

    return <>
        <button onClick={() => setCounter(counter + 2)}>+</button>
        <button onClick={addUser}>add user</button>
        <div>{counter}</div>
        <Users users={newArray}/>
    </>
}

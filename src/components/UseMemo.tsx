import React, {useState} from "react"

export default {
    title: "useMemo"
}

export const Example2 = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    for (let i = 1; i <= a ; i++ ){
        let fake = 0
        while(fake < 100000000) {
            fake++
        }
        resultA = resultA * i
    }
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
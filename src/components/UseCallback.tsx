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



export const LikeUseCallBack = () => {
    console.log("LocalUseCallBack")
    const[counter, setCounter] = useState(0)
    const[books, setBooks] = useState(["JS for child", "Grokking algorithms", "JavaScript: The Definitive Guide"])

    const addBook = () => {
        setBooks([...books, "Angular" + new Date().getTime()])
    }

    const memoizedAddBook = useMemo(() => {
        return addBook
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 2)}>+</button>
        <button onClick={addBook}>add book</button>
        <div>{counter}</div>
        <Book addBook={memoizedAddBook} />
    </>
}

const BooksSecret = (props: {addBook: () => void}) => {
    console.log("UsersSecret")
    return <div>{
    }</div>
}

const Book = React.memo(BooksSecret)

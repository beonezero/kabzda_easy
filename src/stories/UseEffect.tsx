import React, {useEffect, useMemo, useState} from 'react';

function generateData () {
    console.log("generateData")
    return 0

}
const UseEffect = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log("useEffect only first render")
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter])

    return (
        <div>
            <div>Hello{counter} and {fake}</div>
            <button onClick={() => setCounter(counter + 1)}>Counter+</button>
            <button onClick={() => setCounter(fake + 1)}>Fake+</button>

        </div>
    );
};

export default UseEffect;
import React, {useMemo, useState} from 'react';

function generateData () {
    return 0

}
const UseState = () => {
    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)
    const changer = (state: number) => {
        return state + 1
    }
    return (
        <div>
            <button onClick={() => setCounter(changer)}>+</button>
            <div>{counter}</div>
        </div>
    );
};

export default UseState;
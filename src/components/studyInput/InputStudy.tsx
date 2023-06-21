import React, {ChangeEvent, useRef, useState} from 'react';

export const UncontrolledInputStudy = () => {
    return (
        <div>
            <input />
        </div>
    );
};

export const ControlledInputStudy = () => {
    return (
        <div>
            <input  value={"I am controlled input"}/>
        </div>
    );
};

export const TrackValueUncontrolledInputStudy = () => {
    const [value, setValue] = useState("")
    const onChange = (e : ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div>
            <input onChange={onChange}/>
            -
            {value}
        </div>
    );
};

export const GetValueUncontrolledInputStudyByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const saveButton = ( ) => {
            const el  = inputRef.current as HTMLInputElement
            setValue(el.value)
    }
    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={saveButton}>save</button>
            -
            {value}
        </div>
    );
};

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState<string>("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange}/>
}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("3")
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChange}>
        <option>None</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Kiev</option>
        <option value={"3"}>Moscow</option>
    </select>
}

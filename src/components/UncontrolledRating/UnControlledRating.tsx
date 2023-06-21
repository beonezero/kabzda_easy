import React, {useState} from "react";
import s from "./UnControlledRating.module.css"
import {RatingValueType} from "../Rating/Rating";

type StarPropsType = {
    selected?: boolean
    setValue: () => void
    defaultValue?: RatingValueType
}

export function UnControlledRating(props: StarPropsType) {
    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star selected={value > 0} setValue = {() => setValue(1)}/>
            <Star selected={value > 1} setValue = {() => setValue(2)}/>
            <Star selected={value > 2} setValue = {() => setValue(3)}/>
            <Star selected={value > 3} setValue = {() => setValue(4)}/>
            <Star selected={value > 4} setValue = {() => setValue(5)}/>
        </div>
    )
}

function Star(props: StarPropsType) {
    const onClickSpanHandler = () => {
        props.setValue()
    }
    return (
        <span onClick={onClickSpanHandler} className={s.span}>
            {props.selected ? <b>star </b> : "star "}
        </span>
    )
}

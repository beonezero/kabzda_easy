import React, {useState} from 'react';

type PropsType = {
    onChange: (switchOn: boolean) => void
}



const OnOff2 = (props: PropsType) => {

    const [on, setOn] = useState(true)

    const onClickDivHandler = () => {
        setOn(!on)
        props.onChange(!on)
    }

    const wrapper = {
        display: "flex",
        gap: "10px",
        margin: "30px",
        border: "1px solid black",
        padding: "10px",
        width: "140px",
        backgroundColor: "lightgray",
        borderRadius: "5px"
    }

    const onStyle = {
        width: "50px",
        height: "30px",
        border: "1px solid black",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "50px",
        height: "30px",
        border: "1px solid black",
        backgroundColor: !on ? "red" : "white"

    }
    const indicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        border: "1px solid black",
        alignSelf: "center",
        backgroundColor: on ? "green" : "red"
    }
    return (
        <div style={wrapper}>
            <div style={onStyle} onClick={onClickDivHandler}>On</div>
            <div style={offStyle} onClick={onClickDivHandler}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff2;
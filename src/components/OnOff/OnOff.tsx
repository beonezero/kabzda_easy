import React from 'react';
import s from "./OnOff.module.css"

type OnOffPropsType = {
    active: boolean
}

const OnOff = (props: OnOffPropsType) => {
    return (
        <div className={s.OnOff}>
            <div className={props.active ? `${s.On} + ${s.green}` : s.On}>On</div>
            <div className={!props.active ? s.On + " " + s.red : s.On}>Off</div>
            <div className={props.active ? s.Circle + " " + s.green : s.Circle + " " + s.red}></div>
        </div>
    );
};

export default OnOff;
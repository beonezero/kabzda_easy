import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type AccordionPropsType = {
    title: string
}

type AccordionTitleType = {
    title: string
    changeCollapsed: () => void
    collapsed: boolean
}


function UnControlledAccordion(props: AccordionPropsType) {
    // const [collapsed, setCollapsed] = useState(true)

    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    const changeCollapsed = () => {
        dispatch({type: TOGGLE_COLLAPSED})
    }
        return (
            <div>
                {/*<AccordionTitle title={props.title} changeCollapsed={changeCollapsed} collapsed={collapsed}/>*/}
                <AccordionTitle title={props.title} changeCollapsed={changeCollapsed} collapsed={state.collapsed}/>
                {!state.collapsed && <AccordionBody />}
            </div>
        )
}

function AccordionTitle(props: AccordionTitleType) {
    const onClickH3Handler = () => {
        props.changeCollapsed()
    }
    return (
        <h3 onClick={onClickH3Handler}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendered")
    return (

        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    )
}

export default UnControlledAccordion
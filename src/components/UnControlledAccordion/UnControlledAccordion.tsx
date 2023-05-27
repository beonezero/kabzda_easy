import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}

type AccordionTitleType = {
    title: string
    changeCollapsed: (state: boolean) => void
    collapsed: boolean
}

function UnControlledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(true)

    const changeCollapsed = (state: boolean) => {
        setCollapsed(state)
    }
        return (
            <div>
                <AccordionTitle title={props.title} changeCollapsed={changeCollapsed} collapsed={collapsed}/>
                {collapsed && <AccordionBody />}
            </div>
        )
}

function AccordionTitle(props: AccordionTitleType) {
    const onClickH3Handler = () => {
        const state = !props.collapsed
        props.changeCollapsed(state)
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
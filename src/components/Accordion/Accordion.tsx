import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

type AccordionTitleType = {
    title: string
}

function Accordion(props: AccordionPropsType) {
        return (
            <div onClick={() => {props.setCollapsed(!props.collapsed)}}>
                <AccordionTitle title={props.title}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        )
}

function AccordionTitle(props: AccordionTitleType) {
    console.log("AccordionTitle rendered")
    return (
        <h3>{props.title}</h3>
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

export default Accordion
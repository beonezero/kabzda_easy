import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}

type ItemType = {
    title: string
    value: any
}

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

type AccordionTitleType = {
    title: string
}

function Accordion(props: AccordionPropsType) {
        return (
            <div onClick={() => {props.setCollapsed(!props.collapsed)}}>
                <AccordionTitle title={props.title}/>
                {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
            </div>
        )
}

function AccordionTitle(props: AccordionTitleType) {
    console.log("AccordionTitle rendered")
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody(props: AccordionBodyType) {
    console.log("AccordionBody rendered")
    return (

        <ul key={"index"}>
            {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>

    )
}

export default Accordion
import React, {useState} from "react";
import Accordion from "./Accordion";

export const CollapsedMode = () => <Accordion title={"Menu"} collapsed={true} setCollapsed={()=>{}}/>
export const UncollapsedMode = () => <Accordion title={"Users"} collapsed={false} setCollapsed={()=>{}}/>

export const ModeChangingAccordion = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion title={"Users"} collapsed={collapsed} setCollapsed={setCollapsed}/>

}
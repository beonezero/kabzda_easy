import React, {useState} from "react";
import OnOff2 from "./OnOff2";

export const OnMode = () => <OnOff2 onChange={x => true} />
export const OffMode = () => <OnOff2 onChange={x=> false} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff2 onChange={setValue}/>
}
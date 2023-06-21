import React, {useState} from "react";
import OnOff2 from "./OnOff2";

export const OnModeUncontrolled = () => <OnOff2 defaultOn={true} onChange={() => {}} />
export const OffModeUncontrolled = () => <OnOff2 defaultOn={false} onChange={() => {}} />

export const BugMode = () => <div>Unsync when change defaultValue when already rendering </div>


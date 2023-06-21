import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import OnOff2 from "./components/OnOff/OnOff2";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UncontrolledRating/UnControlledRating";
import OnOff2Controlled from "./components/OnOff/OnOff2Controlled";
import {
    EmptyRating,
    Rating1,
    Rating2,
    Rating3,
    Rating4,
    Rating5,
    RatingChanging,

} from "./components/Rating/Ratingstoryfaik";
import {ModeChanging, OffMode, OnMode,} from "./components/OnOff/onOffstoryfaik";
import {CollapsedMode, ModeChangingAccordion, UncollapsedMode} from "./components/Accordion/Accordionstoryfaik";
import {ModeChangingUncontrolledAccordion} from "./components/UnControlledAccordion/UnControlledAccordionstoryfaik";
import {
    OffModeUncontrolled,
    OnModeUncontrolled
} from "./components/OnOff/UncontrolledonOffstoryfaik";
import {
    EmptyUnControlledRating,
    UnControlledRating1, UnControlledRating2, UnControlledRating3, UnControlledRating4, UnControlledRating5
} from "./components/UncontrolledRating/UncontrolledRatingstoryfaik";
import {
    ControlledCheckbox,
    ControlledInput,
    ControlledInputStudy, ControlledSelect, GetValueUncontrolledInputStudyByButtonPress,
    TrackValueUncontrolledInputStudy,
    UncontrolledInputStudy
} from "./components/studyInput/InputStudy";
import Select from "./components/Select/Select";
import {SelectDim} from "./components/selectDimych/selectDim";
import {Example1} from "./components/ReactMemo";
import {Example2} from "./components/UseMemo";

type PageTitlePropsType = {
    title: string
}

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsed, setCollapsed] = useState(false)
    const [onOff, setOnOff] = useState(true)
    const [switchOn, setSwitchOn] = useState(true)
    const [value, setValue] = useState("2")

    return (
        <div className={"App"}>
            {/*<PageTitle title={"This is App component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article 1*/}
            {/*<Rating value={0}/>*/}
            {/*Article 2*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<OnOff active = {true}/>*/}
            {/*<OnOff active = {false}/>*/}
            <OnOff2 onChange={setSwitchOn}/> {switchOn.toString()}
            {/*<OnOff2/>*/}
            {/*<OnOff2/>*/}
            <UnControlledAccordion title={"Menu"}/>
            {/*<UnControlledAccordion title={"Users"}/>*/}
            {/*<UnControlledRating/>*/}
            {/*<UnControlledRating/>*/}
            {/*<UnControlledRating/>*/}
            {/*<UnControlledRating/>*/}
            <OnOff2Controlled onOff={onOff} setOnOff={setOnOff}/>
            {/*story book**/}
            <EmptyRating/>
            <Rating1/>
            <Rating2/>
            <Rating3/>
            <Rating4/>
            <Rating5/>
            <div>---------</div>
            <RatingChanging/>

            {/*<onMode/>*/}
            {/*<offMode/>*/}
            <ModeChanging/>

            <CollapsedMode/>
            <UncollapsedMode/>
            <ModeChangingAccordion/>
            <ModeChangingUncontrolledAccordion/>

            <OnModeUncontrolled/>
            <OffModeUncontrolled/>

            =====================

            <EmptyUnControlledRating/>
            <UnControlledRating1/>
            <UnControlledRating2/>
            <UnControlledRating3/>
            <UnControlledRating4/>
            <UnControlledRating5/>

            =======================
            <UncontrolledInputStudy/>
            -
            <ControlledInputStudy/>
            -
            <TrackValueUncontrolledInputStudy/>
            -
            <GetValueUncontrolledInputStudyByButtonPress/>
            ControlledInput
            <ControlledInput/>
            <div>
                <p>ControlledCheckbox</p>
                <ControlledCheckbox/>
            </div>
            <div>
                <ControlledSelect/>
            </div>
            <div>
                <Accordion title={"Menu"} collapsed={collapsed} setCollapsed={setCollapsed} items={[{title : "One", value: 1}, {title : "Two", value: 2}, {title : "Three", value: 3}, {title : "For", value: 4}]} onClick={() => {
                    console.log("click")}}/>
                <Accordion title={"Users"} collapsed={collapsed} setCollapsed={setCollapsed} items={[{title : "Yauheni", value: 1}, {title : "Yauheni", value: 1}, {title : "Sophia", value: 2}, {title : "Eva", value: 3}]} onClick={(id) =>
                {alert(`bla bla ${id}`)}}/>
            </div>
            <div>
                <Select
                        items={[
                            {id: 1, title: "Minks"},
                            {id: 2, title: "Bobruisk"},
                            {id: 3, title: "Vitebsk"},
                            {id: 4, title: "Grodno"}
                ]}/>
            </div>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <SelectDim setValue={setValue} value={value} items={[
                {value: "1", title: "Minks" },
                {value: "2",title: "Bobruisk"},
                {value: "3",title: "Vitebsk"},
                {value: "4",title: "Grodno"}
            ]}
            />
            <hr/>
            <hr/>
            <hr/>
            <Example1/>
            <hr/>
            <hr/>
            <hr/>
            <Example2/>
        </div>
    )
}

function PageTitle(props: PageTitlePropsType) {
    console.log("apptitle rendered")
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}


export default App;
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
    RatingChanging
} from "./components/Rating/Ratingstoryfaik";

type PageTitlePropsType = {
    title: string
}

function App() {

     const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
     const [collapsed, setCollapsed] = useState(false)
     const [onOff, setOnOff] = useState(true)
     const [switchOn, setSwitchOn] = useState(true)

    return (
        <div>
            {/*<PageTitle title={"This is App component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article 1*/}
            {/*<Rating value={0}/>*/}
            <Accordion title={"Menu"} collapsed = {collapsed} setCollapsed={setCollapsed}/>
            <Accordion title={"Users"} collapsed = {collapsed} setCollapsed={setCollapsed}/>
            {/*Article 2*/}
            <Rating value={ratingValue} onClick = {setRatingValue}/>
            {/*<OnOff active = {true}/>*/}
            {/*<OnOff active = {false}/>*/}
            <OnOff2 onChange = {setSwitchOn}/> {switchOn.toString()}
            {/*<OnOff2/>*/}
            {/*<OnOff2/>*/}
            {/*<UnControlledAccordion title={"Menu"}/>*/}
            {/*<UnControlledAccordion title={"Users"}/>*/}
            <UnControlledRating/>
            {/*<UnControlledRating/>*/}
            {/*<UnControlledRating/>*/}
            {/*<UnControlledRating/>*/}
            {/*<UnControlledRating/>*/}
            <OnOff2Controlled onOff = {onOff} setOnOff = {setOnOff}/>
            {/*story book**/}
            <EmptyRating/>
            <Rating1/>
            <Rating2/>
            <Rating3/>
            <Rating4/>
            <Rating5/>
            <RatingChanging/>
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
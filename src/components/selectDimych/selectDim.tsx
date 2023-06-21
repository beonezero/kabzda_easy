import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from "./selectDim.module.css"

type ItemType = {
    title: string
    value: string
}

type SelectPropsType = {
    value?: string
    onChange?: (value: any) => void
    items: ItemType[]
    setValue: (value: string) => void

}
export const SelectDim = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    const onClickTitleHandler = () => {
        setActive(!active)
    }
    const onKeyUpDivHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.setValue(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.setValue(props.items[0].value)
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])


    return (
        <>
            <div className={s.select} onKeyUp={onKeyUpDivHandler} tabIndex={0}>
                <span className={s.main} onClick={onClickTitleHandler}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={s.items}>
                        {props.items.map(i => {
                            const onClickItemHandler = () => {
                                props.setValue(i.value)
                                setActive(!active)
                            }
                            return (
                                <div className={s.item + " " + (hoveredItem === i ? s.selected : "")}
                                     onClick={onClickItemHandler}
                                     onMouseEnter={() => {
                                         setHoveredElementValue(i.value)
                                     }}
                                     key={i.value}>{i.title}
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </>
    );
};

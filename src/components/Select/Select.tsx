import React, {useState} from 'react';
import s from "./Select.module.css"

type ItemType = {
    title: string
    id: number
}

type SelectPropsType = {
    items: ItemType[]

}
const Select = (props: SelectPropsType) => {
    const [collapsed, setCollapsed] = useState(false)
    const [title, setTitle] = useState("")
    const onClickDivHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={s.container}>
            <div onClick={onClickDivHandler} className={s.window}>{title}</div>

            <div className={s.items_wrapper}>
                {collapsed && props.items.map(i => {
                    const onClickItemHandler = () => {setTitle(i.title); setCollapsed(false)}

                    return (
                    <div onClick={onClickItemHandler} className={s.item}>{i.title}</div>)}
                )
                }
            </div>
        </div>
    );
};

export default Select;
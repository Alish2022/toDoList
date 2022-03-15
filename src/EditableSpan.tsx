import React, {ChangeEvent, useState} from 'react';

type propsType={
    title:string
    edit:(newTitle:string)=>void
}

const EditableSpan:React.FC<propsType> = (props) => {

    const [editMode,setEditMode]=useState<boolean>(false)
    const [title,setTitle]=useState<string>(props.title)

    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.currentTarget.value)
        console.log(title)
    }

    const onClickHandler=()=>{
        setEditMode(true)
    }

    const onBlurHandler=()=>{
        setEditMode(false)
        props.edit(title)
    }

    return (
        <>
            {editMode?
                <input value={title} onBlur={onBlurHandler} onChange={onChangeHandler}  type={"text"} autoFocus/>
                :<span onClick={onClickHandler}>{props.title}</span>}
        </>
    );
};

export default EditableSpan;
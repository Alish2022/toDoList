import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type propsType = {
    title: string
    edit: (newTitle: string) => void
}

const EditableSpan: React.FC<propsType> = (props) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(props.title)
    const [error, setError] = useState<boolean>(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        console.log(title)
    }

    const onClickHandler = () => {
        setEditMode(true)
    }

    const onBlurHandler = () => {
        if (title.trim() === "") {
            setError(true)
        } else {
            setEditMode(false)
            props.edit(title)
        }
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onBlurHandler()
        }
    }

    return (
        <>
            {editMode ?
                <input value={title} onKeyPress={onKeyPressHandler} onBlur={onBlurHandler} onChange={onChangeHandler}
                       type={"text"} autoFocus/>
                {error&& <div className={"errorMessage"}>{error}</div>{
                : <span onClick={onClickHandler}>{props.title}</span>}
        </>
    );
};

export default EditableSpan;



import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type propsType = {
    addItem: (newItem: string) => void
}

const AddItem: React.FC<propsType> = (props) => {

    const [newItem, setNewItem] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewItem(event.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        if (newItem.trim() !== '') {
            props.addItem(newItem.trim())
            setNewItem('')
            setError(null)
        } else {
            setError("Field is required")
        }
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key==='Enter'){
            onClickButtonHandler()
        }
    }

    return (
        <div>
            <input className={error?"errorInput":''} onKeyPress={onKeyPressHandler} onChange={onChangeInputHandler} value={newItem} type={"text"}/>
            <button onClick={onClickButtonHandler}>+</button>
            {error && <div className={"errorMessage"}>{error}</div>}
        </div>
    );
};

export default AddItem;
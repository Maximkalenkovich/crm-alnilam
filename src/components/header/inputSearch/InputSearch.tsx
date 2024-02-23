import React, { useState} from 'react';
import s from './SearchBar.module.css';
import SearchIcon from '@material-ui/icons/Search'

function InputSearch() {
    const [editMode, setEditMode] = useState(false);

function changeState(){
    setEditMode(!editMode)
}
 return (
        <>
        {editMode ?
            <input className={s.input}
                type="text"
                placeholder="Введите текст для поиска"
                onBlur={changeState}
            />
         : <span className={s.span} onDoubleClick={changeState}><SearchIcon className="search-icon" />Search...</span>
        }
        </>
        )
}

export default InputSearch
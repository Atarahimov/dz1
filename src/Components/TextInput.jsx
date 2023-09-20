import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addText} from "../redux/action.js";


function TextInput() {
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();
    const textList = useSelector((state) => state.text);

    const handleAddText = () => {
        dispatch(addText(inputText));
        setInputText('');
    };

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button onClick={handleAddText}>Добавить</button>
            <ul>
                {textList.map((text, index) => (
                    <li key={index}>
                        <p>{text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TextInput;

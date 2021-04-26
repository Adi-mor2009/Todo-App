import React from 'react';
import { Form } from 'react-bootstrap';
import './TaskBox.css'


function TaskBox({placeholder, onEnter, taskText, onTextChange}) {
    return (
        <div className="c-taskbox">
            <Form.Control type="text" placeholder={placeholder} value={taskText} onChange = {e => onTextChange(e.target.value)}
                onKeyPress={e => e.key === 'Enter' ? onEnter(e.target.value) : null}/>
        </div>
    );
}

export default TaskBox;
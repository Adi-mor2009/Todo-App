import React from 'react';
import { Container, Form } from 'react-bootstrap';
import './TaskBox.css'


function TaskBox({placeholder, onEnter, taskText, onTextChange}) {
    return (
        <Container className="c-taskbox">
            <Form.Control type="text" maxLength={22} placeholder={placeholder} value={taskText} onChange = {e => onTextChange(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && e.target.value.length > 0 ? onEnter(e.target.value) : null}/>
        </Container>
    );
}

export default TaskBox;
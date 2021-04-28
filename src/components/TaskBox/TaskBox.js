import React from 'react';
import { Container, Form } from 'react-bootstrap';
import './TaskBox.css'


function TaskBox({placeholder, onEnter, taskText, onTextChange}) {
    return (
        <Container className="c-taskbox">
            <Form.Control type="text" placeholder={placeholder} value={taskText} onChange = {e => onTextChange(e.target.value)}
                onKeyPress={e => e.key === 'Enter' ? onEnter(e.target.value) : null}/>
        </Container>
    );
}

export default TaskBox;
import React from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import './ComplitedTasks.css'


function ComplitedTasks({ tasks, onTaskRemove, onTaskSelected }) {
    return (
        <div className="c-complited-task">
            <ListGroup variant="flush">
                {tasks.map((task, index) =>
                    <ListGroup.Item disabled action>
                        <Form.Check label={task} onClick={() => onTaskSelected(index)}/>
                    </ListGroup.Item>)}
            </ListGroup>
            {/* <InputGroup className="mb-3" variant="flush">
                <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </InputGroup.Prepend>
                <FormControl aria-label="Text input with checkbox" />
            </InputGroup> */}
        </div>
    );
}

export default ComplitedTasks;
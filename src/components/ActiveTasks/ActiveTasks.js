import React from 'react';
import { Form, FormControl, InputGroup, ListGroup } from 'react-bootstrap';
import './ActiveTasks.css'


function ActiveTasks({ tasks, onTaskRemove, onTaskSelected }) {
    return (
        <div className="c-active-task">
            <ListGroup variant="flush">
                {tasks.map((task, index) =>
                    <ListGroup.Item action>
                        <Form.Check label={task} onClick={() => onTaskSelected(index)}/>
                    </ListGroup.Item>)}
            </ListGroup>
            {/* onMouseOver={() => onTaskRemove(index)}> */}
        </div>
    );
}

export default ActiveTasks;
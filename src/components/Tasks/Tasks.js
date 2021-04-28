import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup, ListGroup } from 'react-bootstrap';
import TaskItem from '../TaskItem/TaskItem';
import './Tasks.css'


function ActiveTasks({ tasks, onTaskRemove, onTaskSelected }) {
    return (
        <div className="c-task">
            <ListGroup variant="flush">
                {tasks.map((task, index) =>
                    <TaskItem task={task} index={index} onTaskRemove={onTaskRemove} onTaskSelected={onTaskSelected}></TaskItem>)}
            </ListGroup>
            {/* // getListItem(task, index))} */}
            {/* onMouseOver={() => onTaskRemove(index)}> */}
        </div>
    );
}
export default ActiveTasks;
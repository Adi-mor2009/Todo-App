import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup, ListGroup } from 'react-bootstrap';
import TaskItem from '../TaskItem/TaskItem';
import './Tasks.css'


function ActiveTasks({ tasks, onTaskRemove, onTaskSelected }) {
    //const [iconButton, setIconButton] = useState(false);
    // function getListItem(task, index) {
    //     if (task.status) {
    //         return (
    //             <ListGroup.Item action onMouseOver={() => setIconButton(true)} onMouseOut={() => setIconButton(false)}>
    //                 <Form.Check className="c-active-task" label={task.text} onClick={() => onTaskSelected(index)} />
    //                 <button type="button" class="btn" onClick={() => onTaskRemove(index)}>
    //                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x text-danger" viewBox="0 0 16 16">
    //                         <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    //                     </svg>
    //                 </button>
    //             </ListGroup.Item>
    //         );
    //     }
    //     else {
    //         return (
    //             <ListGroup.Item action onMouseOver={() => setIconButton(true)} onMouseOut={() => setIconButton(false)}>
    //                 <Form.Check className="c-complited-task" label={task.text} onClick={() => onTaskSelected(index)} />
    //                 {iconButton &&
    //                     <button type="button" class="btn" onClick={() => onTaskRemove(index)}>
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x text-danger" viewBox="0 0 16 16">
    //                             <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    //                         </svg>
    //                     </button>
    //                 }
    //             </ListGroup.Item>
    //         );
    //     }
    // }
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
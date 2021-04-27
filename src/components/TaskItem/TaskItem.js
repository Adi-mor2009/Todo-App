import { useState } from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import './TaskItem.css'
function TaskItem({task, index, onTaskRemove, onTaskSelected}) {
    const [iconButton, setIconButton] = useState(false);
    return (
        <ListGroup.Item action onMouseOver={() => setIconButton(true)} onMouseOut={() => setIconButton(false)}>
            <Form.Check className={task.status ? "c-active-task": "c-complited-task"} label={task.text} onClick={() => onTaskSelected(index)} />
            <button type="button" class={iconButton ? "btn" : "btn hide"} onClick={() => onTaskRemove(index)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x text-danger" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>
        </ListGroup.Item>
    );
    
}

export default TaskItem;
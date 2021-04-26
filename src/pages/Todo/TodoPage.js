import React from "react";
import ActiveTasks from "../../components/ActiveTasks/ActiveTasks";
import ComplitedTasks from "../../components/ComplitedTasks/ComplitedTasks";
const { Container, Alert } = require("react-bootstrap");
const { default: TaskBox } = require("../../components/TaskBox/TaskBox");

function Todo() {
    const [tasks, setTasks] = React.useState([]);
    const [complitedTasks, SetComplitedTasks] = React.useState([]);
    const [text, setText] = React.useState("");
    function handleEnterPressed(newTask) {
        setTasks(tasks => tasks.concat(newTask))
        setText("");
    }
    function handleTextChange(newText) {
        setText(newText);
    }
    function markTaskAsComplited(index) {
        SetComplitedTasks(complitedTasks => [...complitedTasks, tasks[index]]);
        setTasks(tasks => tasks.slice(0, index).concat(tasks.slice(index + 1, tasks.length)));
    }
    function removeTaskFromActive(index) {
        Alert();
    }
    return(
        <div className="p-todo">
            <Container>
                <h1 className="display-1">Todos</h1>
                <TaskBox placeholder="Add task ... (to finish press enter)" onEnter={handleEnterPressed} taskText={text} onTextChange={handleTextChange}></TaskBox>
                <ActiveTasks tasks={tasks} onTaskRemove={removeTaskFromActive} onTaskSelected={markTaskAsComplited}></ActiveTasks>
                <ComplitedTasks tasks={complitedTasks} onTaskRemove={removeTaskFromActive} onTaskSelected={markTaskAsComplited}></ComplitedTasks>
            </Container>
        </div>
    )
}

export default Todo;
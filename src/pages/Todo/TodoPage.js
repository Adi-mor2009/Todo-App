import React from "react";
import Tasks from "../../components/Tasks/Tasks";
import './Todo.css';
const { Container, Modal, Button, Navbar, Row } = require("react-bootstrap");
const { default: TaskBox } = require("../../components/TaskBox/TaskBox");

function Todo() {
    const [tasks, setTasks] = React.useState([]); //[{ text: newTask, status: true }, { text: newTask, status: false }...]
    const [text, setText] = React.useState("");//Of tasks Component
    const [show, setShow] = React.useState("All");
    function handleEnterPressed(newTask) {
        setTasks(tasks => tasks.concat({ text: newTask, status: true }))
        setText("");
    }
    function handleTextChange(newText) {
        setText(newText);
    }
    function markTaskAsComplited(index) {
        //setTasks(tasks => tasks => [...tasks, tasks[index].status]);
        let newArr = tasks.map((task, i) => {
            if (index == i) {
                //return newArr[index].status = false;
                let changedTask = { ...task };
                changedTask.status = !changedTask.status;
                return changedTask;
            } else {
                return task;
            }
        });
        setTasks(newArr);
        // SetComplitedTasks(complitedTasks => [...complitedTasks, tasks[index]]);
        // setTasks(tasks => tasks.slice(0, index).concat(tasks.slice(index + 1, tasks.length)));
    }
    function removeTask(index) {
        if (tasks[index].status) {
            return (
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Action</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Are you sure you want to delete your active task?</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Yes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            );
        }
        else {
            setTasks(tasks => tasks.slice(0, index).concat(tasks.slice(index + 1, tasks.length)));
        }
    }
    function getNumOfActiveTasks() {
        return tasks.filter(task => task.status).length;
        //return activeTasksNum ? activeTasksNum + " items left" : "";
    }
    // function setShowStatus(status) {
    //     setShow(status);
    // }
    function getTasks() {
        switch(show) {
            case "All":
                return tasks;
            case "Active":
                return tasks.filter(task => task.status);
            case "Complite":
                return tasks.filter(task => !task.status); 
        }
    }
    return (
        <div className="p-todo">
            <Container >
                <h1 className="display-1">Todos</h1>
                <TaskBox placeholder="Add task ... (to finish press enter)" onEnter={handleEnterPressed} taskText={text} onTextChange={handleTextChange}></TaskBox>
                <Tasks tasks={getTasks()} onTaskRemove={removeTask} onTaskSelected={markTaskAsComplited}></Tasks>
                {/* <ComplitedTasks tasks={complitedTasks} onTaskRemove={removeTaskFromActive} onTaskSelected={markTaskAsComplited}></ComplitedTasks> */}
            </Container>
            <Navbar className={tasks.length == 0 ? "hide" : ""}>
                <Navbar.Brand>{getNumOfActiveTasks()} items left</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className={show === "All" ? "nav-filter marked" : "nav-filter"} onClick={() => setShow("All")}>All</Navbar.Text>
                    <Navbar.Text className={show === "Active" ? "nav-filter marked" : "nav-filter"} onClick={() => setShow("Active")}>Active</Navbar.Text>
                    <Navbar.Text className={show === "Complite" ? "nav-filter marked" : "nav-filter"} onClick={() => setShow("Complite")}>Complite</Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Todo;
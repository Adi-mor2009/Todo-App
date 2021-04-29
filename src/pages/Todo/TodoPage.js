import React, { useEffect } from "react";
import Tasks from "../../components/Tasks/Tasks";
import './Todo.css';
const { Container, Modal, Button, Navbar, Row, OverlayTrigger, Tooltip } = require("react-bootstrap");
const { default: TaskBox } = require("../../components/TaskBox/TaskBox");

function Todo() {
    const [tasks, setTasks] = React.useState([]); //[{ text: newTask, status: true }, { text: newTask, status: false }...]
    const [text, setText] = React.useState("");//Of tasks Component
    const [show, setShow] = React.useState("All");
    useEffect(() => {
        const fromStorage = JSON.parse(localStorage.getItem('tasks'));
        fromStorage ? setTasks(fromStorage) : console.log("No data in local storage");
    }, []);
    useEffect(() => {
        localStorage.removeItem('tasks');
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
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
        switch (show) {
            case "All":
                return tasks;
            case "Active":
                return tasks.filter(task => task.status);
            case "Complite":
                return tasks.filter(task => !task.status);
        }
    }
    function cleanAll() {
        setTasks([]);
        localStorage.removeItem('tasks');
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
                <Navbar.Text>
                    <button type="button" className="btn" onClick={() => cleanAll()}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-clean">clean all list</Tooltip>}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                        </OverlayTrigger>
                    </button>   
                </Navbar.Text>
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
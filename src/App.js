import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Todo from './pages/Todo/TodoPage';

function App() {
  return (
    <div className="App">
      <Container>
        <Todo></Todo>
      </Container>
    </div>
  );
}

export default App;

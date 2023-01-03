import './App.css';
import ToDoItem from './components/ToDoItem';

const todos = ['walk the dog', 'grocery shop', 'portfolio updates', 'put ski gear away', 'chop wood']

function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <h2>To Do List:</h2>
      {todos.map(todo => <ToDoItem todo={todo} />)}
    </div>
  );
}

export default App;

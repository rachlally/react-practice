import './App.css';
import ToDoItem from './components/ToDoItem';
import Counter from './components/Counter';

const todos = ['walk the dog', 'grocery shop', 'portfolio updates', 'put ski gear away', 'chop wood']

function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <Counter/>
      <hr/>
      <Counter />
      <h2>To Do List:</h2>
      {todos.map(todo => <ToDoItem todo={todo} />)}
    </div>
  );
}

export default App;

import './App.css';
import ToDoItem from './components/ToDoItem';
import Counter from './components/Counter';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const todos = ['walk the dog', 'grocery shop', 'portfolio updates', 'put ski gear away', 'chop wood']

function App() {
  return (
    <div>
      <Header/>
      <Counter/>
      <hr/>
      <Counter />
      <div className="m-3 p-3 border border-danger">
      <h2>To Do List:</h2>
      {todos.map(todo => <ToDoItem todo={todo} />)}
      </div>
    </div>
  );
}

export default App;

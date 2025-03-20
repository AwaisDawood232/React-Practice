import './App.css'
import TodoApp from './TodoApp';

function App() {
 
  // let fruits = ["Apple", "Grapes", "Orange"];
  let fruits = [];
  return (
    <>
      <h1>Fruits Name</h1>

      {fruits.length === 0 ? <h3>I am Hungry! There is no fruit</h3> : null }
      <ul className="list-group">
        {fruits.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>


      <TodoApp/>

    </>
  );
}

export default App

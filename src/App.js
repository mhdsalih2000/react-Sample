import { useState } from "react";
import './App.css'


function App() {
  const [ToDos,SetToDos]=useState([])
  const [ToDo,SetToDo]=useState('')


  
  
  return (
    <div>
    <div className="todo-container">
    <h1>ToDo List</h1>
    <div className="add-task">
        <input value={ToDo} onChange={(e)=>SetToDo(e.target.value)}   type="text" id="newTask" placeholder="Add a new task"/> 

        <button onClick={()=>SetToDos([...ToDos,{id:Date.now() ,text:ToDo , stutus:false }])}>Add</button>

    </div>
    <div>{
      ToDos.map((obj)=>{
        return(
        <div key={obj.id} > <ul  className="taskList">{obj.text}</ul>


        <input type="checkbox" className="checkbox "></input>
        
        </div>
       )

        
    })}
    </div>
    </div>
    </div>
  );
}
   
export default App;

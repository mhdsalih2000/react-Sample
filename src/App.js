import './App.css'
import { useState } from 'react';


function App() {
 
  const [todos,Settodos] = useState([])
  const [todo,settodo] = useState("")

  
  
  return (
    <div>
    <div className="todo-container">
    <h1>ToDo List</h1>
    
    <div className="add-task">
    
       <input value={todo} onChange={(event)=>settodo(event.target.value)} type="text" id="newTask" placeholder="Add a new task"/> 
    
        <button onClick={()=>{Settodos([...todos,{id:Date.now(),text:todo ,statuss:false}])}} >Add</button>
        </div>
        </div>
    
    
    
    <div className='sg'>
      {todos.map((valu)=>{
        


        return(<div>
          <input value={valu.statuss} key={valu.id} onChange={(e)=>{console.log(e.target.checked)
            console.log(valu)
          Settodos(todos.filter(obj2=>{if (valu.id ===obj2.id){
            obj2.statuss=e.target.checked
            }
            return obj2}))
                  }}
          type="checkbox"   className='right'/>
          <h1>{valu.text}</h1>

          
</div>
          
        )})}
<div className='activetodo'>
  <h1>active todo</h1>
        {todos.map((obj)=>{
          if (obj.statuss){
           return <div className='active todo'>
            <p>{obj.text}</p></div>
          }
          return null

        })}
        </div>
       
       </div>
       </div>)}
     
   
    
  

   
export default App;
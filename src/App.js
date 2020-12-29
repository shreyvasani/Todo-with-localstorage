import React, { useState, useEffect } from 'react';
import {Container} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Todo from "./Component/todo"
import Todoform from "./Component/todoform"
const App = () => {
  const[todos,setTodos] = useState([]);

  
  useEffect(() => {
    const localtodos = localStorage.getItem("todos")
    console.log(localtodos)
    if(localtodos){
      setTodos(JSON.parse(localtodos))
    }
  } ,[])

    const addTodos = async todo => {
      setTodos([...todos,todo])
    }
    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
    },[
      todos
    ])

    const markComplete = id => {
        setTodos(todos.filter(todos => todos.id !== id));
    }


  return(
    <Container fluid>
      <h1>Todo with local storaage</h1>
     <Todo todo={todos} markComplete={markComplete}> </Todo>
     <Todoform addTodos= {addTodos}>
     </Todoform>
    
    </Container>
  )
}
export default App;

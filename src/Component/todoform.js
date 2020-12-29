import React,{useState} from "react"
import {
    FormGroup,
    Input,
    InputGroupAddon,
    Button,
    Form,
    InputGroup,
   
}from "reactstrap"
import {v4} from "uuid"


const Todoform = ({addTodos}) => {
    const [todostring,setTodostring] = useState("");
        const handleEvent = e => {
        e.preventDefault();
        if(todostring === ""){
            return alert('please enter some value');
        }
        const todo = {
            todostring,
            id:v4()
        }
        addTodos(todo);
        setTodostring("")
    }
    return(
        <Form onSubmit={handleEvent}>
            <FormGroup>
                <InputGroup>
                    <Input type="text"  name="todo" id="todo" placeholder="enter a todo" value={todostring} 
                    onChange={ e=>setTodostring(e.target.value)} />
                    <InputGroupAddon addonType="append">
                    <Button color="success">Add Todo</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}
export default Todoform
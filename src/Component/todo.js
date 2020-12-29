import React from "react"
import {ListGroup,ListGroupItem} from "reactstrap"
import {FaCheckDouble} from "react-icons/fa"

const Todo = ({todo,markComplete}) => {
    return(
        <ListGroup className="mt-5 mb-2 items">
            {
                todo.map(todo=>(
                <ListGroupItem key={todo.id}>
                    {todo.todostring}
                    <span className="float-right" onClick={
                        () => markComplete(todo.id)
                    }>
                    <FaCheckDouble></FaCheckDouble>
                    </span>
                </ListGroupItem>
                ))}
        </ListGroup>
    )

}
export default Todo
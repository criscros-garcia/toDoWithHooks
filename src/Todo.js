import  {react} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {ListItem, 
        ListItemText, 
        Checkbox,
        IconButton,
        ListItemSecondaryAction} from "@material-ui/core";

function Todo({task, completed}){
    return(
        // <p>{todo.id} - {todo.task} - {todo.completed}</p>
    <ListItem>
        <Checkbox tabIndex={-1} checked={completed}/>
        <ListItemText style={{textDecoration: completed ? "line-through":"none"}}>
            {task}
        </ListItemText>
        <ListItemSecondaryAction>
            <IconButton aria-label="Delete">
                <DeleteIcon/>
            </IconButton>
            <IconButton aria-label="Delete">
                <EditIcon/>
            </IconButton >
        </ListItemSecondaryAction>
    </ListItem>
    );
}

export default Todo;
import React from "react";
import { TextField, Paper } from "@material-ui/core";
import useInputState from "./hooks/useInputState";


function TodoForm({addTodo}){
 const [value, handleChange, reset] = useInputState("");

    
    return(
        <Paper style={{margin: "1rem 0", padding: "0 1rem" }}>
            <form
                onSubmit={e => {e.preventDefault();
                addTodo(value);
                reset();
                }}>

            <TextField 
                label="Write your Task here"
                value={value}
                onChange={handleChange}
                margin='normal'
                fullWidth
                />
            </form>
            <p>{value}</p>  
        </Paper>
    );
}

export default TodoForm;
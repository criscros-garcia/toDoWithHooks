import {React, useState} from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { Typography, 
         Paper, 
         AppBar,
         Toolbar,
         Grid } from "@material-ui/core";   


function TodoApp(){
    const initialTodos = [
        {id:1, task:"Walk the dog", completed: false},  
        {id:2, task:"Walk the cat", completed: true},  
        {id:3, task:"Walk me",      completed: false}  
    ];
    const[todos, setTodos] = useState(initialTodos);
    const addTodo = newTodoText => {
        setTodos([...todos, {id:4, task:newTodoText, completed:true}])
    }
    return(
        <Paper style={{
                padding: 0,
                margin:  0,
                height:  "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar color="primary" position="static"
                style={{height: "64px"}}>
                <Toolbar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{marginTop: "1rem"}}>
                <Grid item xs={11} md={8} lg={4}>
                </Grid>
            </Grid>
            <TodoForm addTodo={addTodo}/ >
            <TodoList todos={todos}/>
        </Paper>
            

    );
}


export default TodoApp;
import {React, useState} from "react";
import TodoList from "./TodoList";
import { Typography, 
         Paper, 
         AppBar,
         Toolbar,
         Grid } from "@material-ui/core";   


function TodoApp(){
    const initialTodos = [
        {id:1, task:"Walk the dog", completed: false},  
        {id:2, task:"Walk the cat", completed: true},  
        {id:1, task:"Walk me",      completed: false}  
    ];
    const[todos, setTodos] = useState(initialTodos);
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
                    <h1>I am a form</h1>
                    <h1>Todo Lists</h1>
                </Grid>
            </Grid>
            <TodoList todos={todos}/>
        </Paper>
            

    );
}


export default TodoApp;
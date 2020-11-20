import React, { Component } from 'react';
import {Task} from './components/task';
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      tasks:[],
      task:''
    }
    
  }

  handleOnChange=(e)=>{
     
    this.setState({task:[e.target.value]});
  }

  handleClick=()=>{
    const {task,tasks}=this.state;
    // check if task is empty

    if(task===''){alert("task is empty")}

    else{
     tasks.push(task);
    // if not add this task in tasks array
    this.setState({tasks:tasks});
    }


  }

  handleDelete=(task)=>{
    // use filter to filter out task from array
    const filterTask = this.state.tasks;
    for(let i = 0; i < filterTask.length; i++) {
      if(task === filterTask[i]) {
        delete filterTask[i];
        break;
      }
    }
    this.setState({tasks:filterTask});
  }
  render() {
   const {task,tasks}=this.state;
    console.log('task',task);
    console.log("tasks",tasks);
    return (
      <div style={{margin:'10%'}}>
        
        <input onChange={this.handleOnChange}/>
        <button onClick={this.handleClick}>Add Task</button>

 {tasks.map((task)=>
       <Task task={task} handleDelete={this.handleDelete}/>
 )}
      </div>
    );
  }
}

export default App;
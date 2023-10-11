import React from 'react';
import './App.css';
import { Todolist } from './components/Todolist';
import { TaskDataType } from './components/Todolist';

function App() {

    const task1: TaskDataType[] = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: false},
        {id: 3, title: 'React',isDone: false}
    ]

    const task2: TaskDataType[] = [
        {id: 1, title: 'Simsons', isDone: true},
        {id: 2, title: 'Futurama', isDone: false},
        {id: 3, title: 'Little Mermaid', isDone: true}
    ]

    return (
        <div className="App">
            <Todolist title={'What to learn'} task1={task1}/>
            <Todolist title={'What to learn more'} task1={task1}/>
            <Todolist title={'and more'} task1={task1}/>
        </div>
    );
}




export default App;

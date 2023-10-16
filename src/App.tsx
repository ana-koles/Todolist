import React, { useState } from 'react';
import './App.css';
import { Todolist } from './components/Todolist';
import { TaskDataType } from './components/Todolist';

export type FilterValueType = 'all' | 'completed' | 'active';

function App() {

    let initialTasks: TaskDataType[] = [ //первоначальные данные
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: false},
        {id: 3, title: 'React',isDone: false},
        {id: 4, title: 'Redux',isDone: false}
    ]

    /*
    let arr = useState(initialTasks); //говорим Реакту за какими данными следить
    let tasks = arr[0]; // присваиваем массив с данными
    let setTasks = arr[1]; // присваиваем ф-цию для обновления state

    краткая запись ниже:*/

    const [tasks, setTasks] = useState(initialTasks);

    const [filter, setFilter] = useState('all');

    let filteredTasksForTodolist = tasks;

    function changeFilter(filterValue: FilterValueType) {
        setFilter(filterValue);
    }

    if (filter === 'completed') {
        filteredTasksForTodolist = tasks.filter((t) => t.isDone === true);
    }
    if (filter === 'active') {
        filteredTasksForTodolist = tasks.filter((t) => t.isDone === false);
    }


    function removeTask(id: number) {
        let filteredTasks = tasks.filter((t) => t.id !== id); //модифицируем данные
        setTasks(filteredTasks); //обновляем state и перерисовываем html, реакт снова запустим ф-цию app, чтобы обновить html
    }

    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                task={filteredTasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />

        </div>
    );
}


export default App;

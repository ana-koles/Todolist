import React from 'react'
import { FilterValueType } from '../App'


type TodolistPropsType = {
  title: string,
  task: TaskDataType[],
  removeTask: (id: number) => void,
  changeFilter: (filterValue: FilterValueType) => void,
}

export type TaskDataType = {
  id: number,
  title: string,
  isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>

      <ul>

        {props.task.map((task) => {
          return (
            <li><input type="checkbox" checked={task.isDone} /> <span>{task.title}</span>
              <button onClick={() => {props.removeTask(task.id)}}>x</button>
            </li>
          )
        })}
      </ul>


      <div>
        <button onClick={() => {props.changeFilter('all')}}>All</button>
        <button onClick={() => {props.changeFilter('active')}}>Active</button>
        <button onClick={() => {props.changeFilter('completed')}}>Completed</button>
      </div>
    </div>
  )
}
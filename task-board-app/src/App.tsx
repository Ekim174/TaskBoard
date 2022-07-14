import React, {useEffect, useState} from 'react';
import './App.css';
import { tasksData, borderColumnList } from './constants/tasksData'
import cn from "classnames";


function App() {

  const [taskList, setTaskList] = useState<any>(tasksData)
  const [currentTask, setCurrentTask] = useState(null)
  const [currentColumn, setCurrentColumn] = useState(null)
  const [isDraggable, setIsDraggable] = useState(false)

  const dragOverHandler: any = (e: any)=> {
    e.preventDefault()
  };

  const dragLeaveHandler: any = (e: any, column: any, task: any) => {

  };

  const dragStartHandler: any = (e: any, column: any, task: any) => {
    setCurrentTask(task)
    setCurrentColumn(column)
  };

  const dragEndHandler: any = (e: any, column: any, task: any) => {
  };

  const dropHandler: any = (e: any, column: any, task: any) => {
    e.preventDefault()
    const currentIndex = taskList.indexOf(currentTask);
    const updateTaskList = taskList
    updateTaskList[currentIndex].status = column
    setTaskList([...updateTaskList])
  };

  const rowClass = cn('board-row',
    {'draggable': isDraggable}
  )


  return (
    <div className='container'>
      {borderColumnList.map(column =>
        <div
          className={rowClass}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, column)}
          onDragLeave={(e) => dragLeaveHandler(e, column)}
        >
          <h2>{column}</h2>
            {taskList.length > 0 && taskList.map((task: any) =>
              task.status === column &&
                <div
                    onDragOver={(e) => dragOverHandler(e)}
                    onDragLeave={(e) => dragLeaveHandler(e, column, task)}
                    onDragStart={(e) => dragStartHandler(e, column, task)}
                    onDragEnd={(e) => dragEndHandler(e, column, task)}
                    onDrop={(e) => dropHandler(e, column, task)}
                    className={cn('task', `${task.importance.toLowerCase()}`)}
                    draggable={true}>
                    <span>{task.task_number}</span>
                    <span>{task.task_name}</span>
                </div>
            )}
        </div>
      )}
    </div>
  );
}

export default App;

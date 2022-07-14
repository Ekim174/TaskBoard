import React, {useEffect, useState} from 'react';
import { generateTaskData, boardColumns, importanceList} from './constants/tasksData'
import cn from "classnames";
import styled from './App.module.scss'


function App() {

  const [taskList, setTaskList] = useState<any>([])
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

  const rowClass = cn(styled['board-row'],
    {'draggable': isDraggable}
  )

  const sort = (data: any) => {
    const result = data.sort((a: any, b: any): any => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      if (importanceList.indexOf(a.importance) > importanceList.indexOf(b.importance)) {
        return 1
      }
      if (importanceList.indexOf(a.importance) < importanceList.indexOf(b.importance)) {
        return -1
      }
      return 0;
    })
    setTaskList(result)
  }
  useEffect(() => {
    !taskList.length ? sort(generateTaskData()) : sort(taskList)
  }, [taskList])


  return (
    <div className={styled.container}>
      <h1>Task Board</h1>
      <div className={styled.board}>
        {boardColumns.map(column =>
          <div
            className={rowClass}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, column)}
            onDragLeave={(e) => dragLeaveHandler(e, column)}
          >
            <h2 className={styled['colum-title']}>{column}</h2>
              {taskList.length && taskList.map((task: any) =>
                task.status === column &&
                  <div
                      onDragOver={(e) => dragOverHandler(e)}
                      onDragLeave={(e) => dragLeaveHandler(e, column, task)}
                      onDragStart={(e) => dragStartHandler(e, column, task)}
                      onDragEnd={(e) => dragEndHandler(e, column, task)}
                      onDrop={(e) => dropHandler(e, column, task)}
                      className={cn(styled['task'], styled[`${task.importance.toLowerCase()}`])}
                      draggable={true}>
                      <span>{task.task_number}</span>
                      <span>{task.task_name}</span>
                  </div>
              )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

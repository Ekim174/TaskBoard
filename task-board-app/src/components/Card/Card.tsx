import React, {FC, useState} from "react";
import './Card.css';
import cn from 'classnames';

// const Card: FC<any> = ({task, column, taskList, setTaskList}) => {
//
//   const [isDraggable, setIsDraggable] = useState(false)
//
//   const dragOverHandler: any = (e: any)=> {
//     e.preventDefault()
//     setIsDraggable(true)
//   };
//
//   const dragLeaveHandler: any = () => {
//     setIsDraggable(false)
//   };
//
//   const dragStartHandler: any = (e: any, column: any, task: any) => {
//     setCurrentTask(task)
//     setCurrentColumn(column)
//   };
//   const dragEndHandler: any = () => {
//     setIsDraggable(false)
//   };
//
//   const dropHandler: any = (e: any, column: any, task: any) => {
//     e.preventDefault()
//     console.log(currentTask)
//     const updateTaskList = taskList;
//     const currentIndex = updateTaskList.indexOf(currentTask);
//     console.log(currentTask);
//   };
//
//   const cardClass = cn('card',
//     `${task.importance.toLowerCase()}`,
//     {'draggable': isDraggable}
//   )
//
//   return (
//     <div
//       onDragOver={(e) => dragOverHandler(e, column, task)}
//       onDragLeave={(e) => dragLeaveHandler(e)}
//       onDragStart={(e) => dragStartHandler(e, column, task)}
//       onDragEnd={(e) => dragEndHandler(e)}
//       onDrop={(e) => dropHandler(e, column, task)}
//       className={cardClass}
//       draggable={true}>
//       <span>{task.task_number}</span>
//       <span>{task.task_name}</span>
//     </div>
//   )
// }

// export default Card;
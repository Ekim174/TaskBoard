import React, { FC, useContext } from "react";
import { BoardContext, BoardContextInterface } from "context/boardContext";
import { TaskCardProps } from "./TaskCard.types";
import { TaskTypes } from "types/taskTypes";
import cn from "classnames";

import styled from "./TaskCard.module.scss";

const TaskCard: FC<TaskCardProps> = ({task}) => {

  const { state, actions } = useContext<BoardContextInterface>(BoardContext);
  const { selectedTask } = state;
  const { setCurrentTask, setSelectedTask } = actions;

  const selectTaskHandler = (task: TaskTypes) => {
    if(selectedTask?.task_number !== task.task_number) {
      setSelectedTask(task);
    }
  };

  return (
    <div
      data-testid="TaskCard"
      draggable
      onDragOver={(e) => e.preventDefault()}
      onDragStart={() => setCurrentTask(task)}
      onClick={() => selectTaskHandler(task)}
      className={cn(styled.task, styled[`${task.importance.toLowerCase()}`],
        selectedTask?.task_number === task.task_number && styled.taskActive)
      }>
      <span>{task.task_number}</span>
      <span>{task.task_name}</span>
    </div>
  )
};

export default TaskCard;
import { FC } from "react";
import { TaskInfoProps } from "./TaskInfo.types";

import styled from "./TaskInfo.module.scss";

const TaskInfo:FC<TaskInfoProps> = ({task, onClose}) => {

  return (
    <div data-testid="TaskInfo" className={styled.task}>
      <div data-testid="TaskInfoClose" className={styled.close} onClick={onClose}>X</div>
      {Object.keys(task).map((key: string) =>
        (key !== 'name' && key !== 'surname' && <span key={key}>{`${key}: ${task[key]}`}</span>)
      )}
      <span className={styled.name}>{task.surname}, {task.name}</span>
    </div>
  )
};

export default TaskInfo;
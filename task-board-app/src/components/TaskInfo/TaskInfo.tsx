import { FC } from "react";
import { TaskInfoProps } from "./TaskInfo.types";

import styled from "./TaskInfo.module.scss";

const TaskInfo:FC<TaskInfoProps> = ({task, onClose}) => {

  const {name, surname, ...restTaskData} = task;

  return (
    <div data-testid="TaskInfo" className={styled.task}>
      <div data-testid="TaskInfoClose" className={styled.close} onClick={onClose}>X</div>
      {Object.entries(restTaskData).map(([key, value]) =>
        (<span key={key}>{key}: {value}</span>)
      )}
      <span className={styled.name}>{surname}, {name}</span>
    </div>
  )
};

export default TaskInfo;
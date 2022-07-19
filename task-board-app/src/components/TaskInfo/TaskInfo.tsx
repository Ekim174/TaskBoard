import {FC, memo} from "react";
import { TaskInfoProps } from "./TaskInfo.types";

import styled from "./TaskInfo.module.scss";

const propsCompare = (prevProps: TaskInfoProps, nextProps: TaskInfoProps) => {
  return prevProps.task.task_number === nextProps.task.task_number && prevProps.status === nextProps.status;
};

const TaskInfo:FC<TaskInfoProps> = memo(({task, onClose}) => {

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
}, propsCompare);

export default TaskInfo;
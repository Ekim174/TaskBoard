import React, {FC, useMemo, useContext} from "react";
import TaskCard from "components/TaskCard/TaskCard";
import { TaskTypes } from "types/taskTypes";
import { BoardColumnProps } from "./BoardColumn.types";
import { BoardContext } from "context/boardContext";
import { StatusTypes } from "types/statusTypes";

import styled from "./BoardColumn.module.scss";

const BoardColumn: FC<BoardColumnProps> = ({column, sortedList}) => {

  const { boardStates, actions } = useContext(BoardContext);
  const { setSelectedStatus, setTaskList } = actions;

  const dropHandler = (e: React.DragEvent<HTMLDivElement>, column: string) => {
    e.preventDefault();
    const currentIndex = sortedList.indexOf(boardStates.currentTask as TaskTypes);
    sortedList[currentIndex].status = StatusTypes[column as StatusTypes];
    if (sortedList[currentIndex].task_number === boardStates.selectedTask?.task_number) {
      setSelectedStatus(sortedList[currentIndex].status);
    }
    setTaskList([...sortedList]);
  };

  const filteredList = useMemo(() => {
    return sortedList.filter((task: TaskTypes) => task.status === column);
  }, [column, sortedList]);

  return (
      <div
        data-testid="BoardColumn"
        className={styled.boardColumn}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => dropHandler(e, column)}>
        <div className={styled.columTitle}><h2>{column}</h2></div>
        {filteredList.map((task: TaskTypes) => <TaskCard key={task.task_number} task={task}/>)}
      </div>
  )
};

export default BoardColumn;
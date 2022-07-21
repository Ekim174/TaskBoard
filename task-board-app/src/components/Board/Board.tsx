import React, {FC, useEffect, useMemo, useReducer, useState} from "react";
import TaskInfo from "components/TaskInfo/TaskInfo";
import BoardColumn from "components/BoardColumn/BoardColumn";
import {Reducer, State, ActionKind, Action, BoardProps} from "./Board.types";
import { TaskTypes } from "types/taskTypes";
import { BoardContext } from "context/boardContext";
import { importancePriority } from "constants/importancePriority";
import { boardColumns } from "constants/boardColumns";

import styled from "./Board.module.scss";

const reducer = (state: State, action: Action) :State => {
  switch (action.type) {
    case ActionKind.setSelectedTask:
      return {...state, selectedTask: action.value} as State;
    case ActionKind.setCurrentTask:
      return {...state, currentTask: action.value} as State;
    case ActionKind.setSelectedStatus:
      return {...state, selectedTaskStatus: action.value} as State;
    case ActionKind.setTaskList:
      return {...state, taskList: action.value} as State;
  }
}

const initialState: State = {
  selectedTask: null,
  currentTask: null,
  selectedTaskStatus: '',
  taskList: []
};

const Board: FC<BoardProps> = ({taskList}) => {

  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, initialState);

  const actions = useMemo(() => ({
    setSelectedTask: (value: TaskTypes | null) => dispatch({type: ActionKind.setSelectedTask, value}),
    setCurrentTask: (value: TaskTypes) => dispatch({type: ActionKind.setCurrentTask, value}),
    setSelectedStatus: (value: string) => dispatch({type: ActionKind.setSelectedStatus, value}),
    setTaskList: (value: TaskTypes[]) => dispatch({type: ActionKind.setTaskList, value}),
  }), []);

  const sortedList = useMemo(() => {
    return state.taskList.sort((a: TaskTypes, b: TaskTypes) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      if (importancePriority[a.importance] > importancePriority[b.importance]) {
        return 1;
      }
      if (importancePriority[a.importance] < importancePriority[b.importance]) {
        return -1;
      }
      return 0;
    });
  }, [state.taskList]);

  useEffect(() => {
    setIsLoading(false)
    actions.setTaskList(taskList)
  }, []);

  return (
    <BoardContext.Provider value={{state, actions}}>
      <div data-testid="Board" className={styled.container}>
        <h1>Task Board</h1>
        <div className={styled.board}>
          {isLoading ? (<h2>Loading...</h2>) :
          (sortedList.length > 0 ?
            (boardColumns.map(column => (<BoardColumn key={column} column={column} sortedList={sortedList}/>))) :
            (<h2>Task list is empty.</h2>)
          )}
        </div>
        {state.selectedTask &&
          (<TaskInfo
            status={state.selectedTaskStatus}
            task={state.selectedTask}
            onClose={() => actions.setSelectedTask(null)}/>
          )}
      </div>
    </BoardContext.Provider>
  )
}

export default Board;
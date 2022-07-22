import React, {FC, useEffect, useMemo, useReducer } from "react";
import TaskInfo from "components/TaskInfo/TaskInfo";
import BoardColumn from "components/BoardColumn/BoardColumn";
import { BoardProps } from "./Board.types";
import { Reducer, State, ActionKind, Action } from "reducers/boardReducer/boardReducersTypes";
import { TaskTypes } from "types/taskTypes";
import { BoardContext } from "context/boardContext";
import { boardReducer } from "reducers/boardReducer";
import { boardColumns } from "constants/boardColumns";
import sortingList from "functions/sortingList/sortingList";

import styled from "./Board.module.scss";

const initialState: State = {
  selectedTask: null,
  currentTask: null,
  selectedTaskStatus: '',
  taskList: []
};

const Board: FC<BoardProps> = ({taskList}) => {

  const [state, dispatch] = useReducer<Reducer<State, Action>>(boardReducer, initialState);

  const actions = useMemo(() => ({
    setSelectedTask: (value: TaskTypes | null) => dispatch({type: ActionKind.setSelectedTask, value}),
    setCurrentTask: (value: TaskTypes) => dispatch({type: ActionKind.setCurrentTask, value}),
    setSelectedStatus: (value: string) => dispatch({type: ActionKind.setSelectedStatus, value}),
    setTaskList: (value: TaskTypes[]) => dispatch({type: ActionKind.setTaskList, value}),
  }), []);

  const sortedList = useMemo(() => {
    return sortingList(state.taskList);
  }, [state.taskList]);

  useEffect(() => {
    actions.setTaskList(taskList)
  }, []);

  return (
    <BoardContext.Provider value={{state, actions}}>
      <div data-testid="Board"  className={styled.board}>
        {sortedList.length > 0 ?
          (boardColumns.map(column => (<BoardColumn key={column} column={column} sortedList={sortedList}/>))) :
          (<h2>Task list is empty.</h2>)
        }
      </div>
      {state.selectedTask &&
        (<TaskInfo
          status={state.selectedTaskStatus}
          task={state.selectedTask}
          onClose={() => actions.setSelectedTask(null)}/>
        )}
    </BoardContext.Provider>
  )
}

export default Board;
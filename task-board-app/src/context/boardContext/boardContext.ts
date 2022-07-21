import { createContext } from "react";
import { Action, ActionKind, State } from "components/Board/Board.types";
import { BoardContextInterface } from "./boartContext.types";

export const boardReducer = (state: State, action: Action) :State => {
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

export const BoardContext = createContext<BoardContextInterface>({} as BoardContextInterface);

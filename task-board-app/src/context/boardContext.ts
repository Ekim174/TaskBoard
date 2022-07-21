import {createContext} from "react";
import { State } from "components/Board/Board.types"
import { TaskTypes } from "types/taskTypes";

interface BoardContextActions {
  setSelectedTask: (value: TaskTypes | null) => void,
  setCurrentTask: (value: TaskTypes) => void,
  setSelectedStatus: (value: string) => void,
  setTaskList: (value: TaskTypes[]) => void,
}

export interface BoardContextInterface {
  state: State,
  actions: BoardContextActions,
}

export const BoardContext = createContext<BoardContextInterface>({} as BoardContextInterface);
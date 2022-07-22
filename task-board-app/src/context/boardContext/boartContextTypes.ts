import { TaskTypes } from "types/taskTypes";
import { State } from "reducers/boardReducer/boardReducersTypes";

export interface BoardContextActions {
  setSelectedTask: (value: TaskTypes | null) => void,
  setCurrentTask: (value: TaskTypes) => void,
  setSelectedStatus: (value: string) => void,
  setTaskList: (value: TaskTypes[]) => void,
}

export interface BoardContextInterface {
  state: State,
  actions: BoardContextActions,
}
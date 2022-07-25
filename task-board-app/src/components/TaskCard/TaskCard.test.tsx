import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import TaskCard from './TaskCard';
import { TaskTypes } from "types/taskTypes";
import { StatusTypes } from "types/statusTypes";
import { ImportanceTypes } from "types/importanceTypes";
import {BoardContext} from "context/boardContext";
import { State } from "reducers/boardReducer/boardReducersTypes";

const taskCould: TaskTypes = {
    task_number: "TSK-0001",
    task_name: "Bug Fix",
    name: "Аль",
    surname: "Пачино",
    status: StatusTypes.DONE,
    importance: ImportanceTypes.COULD,
    date: "25/06/2022"
};

const taskMust: TaskTypes = {
    task_number: "TSK-0003",
    task_name: "Bug Fix",
    name: "Роджер",
    surname: "Дикинс",
    status: StatusTypes.IN_PROGRESS,
    importance: ImportanceTypes.MUST,
    date: "25/06/2022"
};

const boardStates: State = {
  selectedTask: taskMust,
  currentTask: null,
  selectedTaskStatus: '',
  taskList: []
};

const actions = {
  setSelectedTask: () => jest.fn(),
  setCurrentTask: () => jest.fn(),
  setSelectedStatus: () => jest.fn(),
  setTaskList: () => jest.fn(),
};

const setUp = (task: TaskTypes) => {
  render(
    <BoardContext.Provider value={{boardStates, actions}}>
      <TaskCard task={task} />
    </BoardContext.Provider>
  );
};

describe('TaskCard', () => {

  test('should render correctly', () => {
    setUp(taskCould)
    const taskCard = screen.getByTestId("TaskCard");
    expect(screen.getAllByTestId("TaskCard")).toHaveLength(1)
    expect(taskCard).toHaveClass("could")
    expect(taskCard).not.toHaveClass("active")
    expect(screen.getByText(/TSK-0001/i)).toBeInTheDocument()
    expect(screen.getByText(/Bug Fix/i)).toBeInTheDocument()
    expect(screen.queryByText(/Аль/i)).toBeNull()
    expect(screen.queryByText(/date/i)).toBeNull()
  });

  test('should be active', () => {
    setUp(taskMust)
    expect(screen.getByTestId("TaskCard")).toHaveClass('must active')
  });
});
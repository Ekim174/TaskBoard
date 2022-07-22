import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import BoardColumn from './BoardColumn';
import { TaskTypes } from "types/taskTypes";
import { StatusTypes } from "types/statusTypes";
import { ImportanceTypes } from "types/importanceTypes";
import {BoardContext} from "context/boardContext";
import { State } from "reducers/boardReducer/boardReducersTypes";

const taskList: TaskTypes[] = [
  {
    task_number: "TSK-0001",
    task_name: "Bug Fix",
    name: "Аль",
    surname: "Пачино",
    status: StatusTypes.DONE,
    importance: ImportanceTypes.COULD,
    date: "25/06/2022"
  },
  {
    task_number: "TSK-0003",
    task_name: "Bug Fix",
    name: "Роджер",
    surname: "Дикинс",
    status: StatusTypes.IN_PROGRESS,
    importance: ImportanceTypes.COULD,
    date: "25/06/2022"
  }
];

const state: State = {
  selectedTask: null,
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

const setUp = (sortedList: TaskTypes[]) => {
  render(
    <BoardContext.Provider value={{state, actions}}>
      <BoardColumn column={'IN PROGRESS'} sortedList={sortedList} />
    </BoardContext.Provider>
  );
};

describe('BoardColumn', () => {

  test('should render correctly', () => {
    setUp(taskList)
    expect(screen.getByText(/IN PROGRESS/i)).toBeInTheDocument()
    expect(screen.getByTestId('BoardColumn')).toHaveClass('boardColumn')
  });

  test('should filter the values', () => {
    setUp(taskList)
    expect(screen.getAllByTestId("TaskCard")).toHaveLength(1)
  });
});
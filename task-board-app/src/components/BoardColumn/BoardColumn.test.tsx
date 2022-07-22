import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import BoardColumn from './BoardColumn';
import { TaskTypes } from "types/taskTypes";
import { StatusTypes } from "types/statusTypes";
import { ImportanceTypes } from "types/importanceTypes";
import {BoardContext} from "context/boardContext";
import { State } from "reducers/boardReducer/boardReducersTypes";
import fakeTaskList from "constants/fakeTaskList";

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
    setUp(fakeTaskList)
    expect(screen.getByText(/IN PROGRESS/i)).toBeInTheDocument()
    expect(screen.getByTestId('BoardColumn')).toHaveClass('boardColumn')
  });

  test('should filter the values', () => {
    setUp(fakeTaskList)
    expect(screen.getAllByTestId("TaskCard")).toHaveLength(2)
  });

});
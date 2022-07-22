import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Board from './Board';
import { TaskTypes } from "types/taskTypes";
import userEvent from "@testing-library/user-event";
import fakeTaskList from "constants/fakeTaskList";

const setUp = (taskList: TaskTypes[]) => {
  render(<Board taskList={taskList} />)
};

describe('Board', () => {

  test('should render correctly with empty values', () => {
    setUp([])
    expect(screen.getByText(/Task list is empty/i)).toBeInTheDocument()
    expect(screen.queryAllByTestId("BoardColumn")).toHaveLength(0)
    expect(screen.queryAllByTestId("TaskCard")).toHaveLength(0)
  });

  test('should render correctly with values', () => {
    setUp(fakeTaskList)
    expect(screen.queryByText(/Task list is empty/i)).toBeNull()
    expect(screen.getAllByTestId("BoardColumn")).toHaveLength(4)
    expect(screen.getAllByTestId("TaskCard")).toHaveLength(5)
  });

  test('change and remove selected task', () => {
    setUp(fakeTaskList)
    expect(screen.queryByTestId('TaskInfo')).toBeNull()
    userEvent.click(screen.getByText(/TSK-0001/i))
    expect(screen.getAllByTestId('TaskInfo')).toHaveLength(1)
    expect(screen.getByText(/Аль/i)).toBeInTheDocument()
    expect(screen.getByText(/date/i)).toBeInTheDocument()
    userEvent.click(screen.getByTestId('TaskInfoClose'))
    expect(screen.queryByTestId('TaskInfo')).toBeNull()
  });

});
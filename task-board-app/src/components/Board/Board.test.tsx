import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Board from './Board';
import { TaskTypes } from "types/taskTypes";
import { StatusTypes } from "types/statusTypes";
import { ImportanceTypes } from "types/importanceTypes";
import userEvent from "@testing-library/user-event";

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
    task_number: "TSK-0002",
    task_name: "Bug Fix",
    name: "Вуди",
    surname: "Аллен",
    status: StatusTypes.TESTING,
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
    setUp(taskList)
    expect(screen.queryByText(/Task list is empty/i)).toBeNull()
    expect(screen.getAllByTestId("BoardColumn")).toHaveLength(4)
    expect(screen.getAllByTestId("TaskCard")).toHaveLength(3)
  });

  test('change and remove selected task', () => {
    setUp(taskList)
    expect(screen.queryByTestId('TaskInfo')).toBeNull()
    userEvent.click(screen.getByText(/TSK-0001/i))
    expect(screen.getAllByTestId('TaskInfo')).toHaveLength(1)
    expect(screen.getByText(/Аль/i)).toBeInTheDocument()
    expect(screen.getByText(/date/i)).toBeInTheDocument()
    userEvent.click(screen.getByTestId('TaskInfoClose'))
    expect(screen.queryByTestId('TaskInfo')).toBeNull()
  });

});
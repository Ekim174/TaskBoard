import React from 'react';
import {act, render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe('App', () => {

  test('should render correctly', () => {
    render(<App/>);
    expect(screen.getAllByRole('heading')).toHaveLength(5)
    expect(screen.getByText(/PLAN/i)).toBeInTheDocument()
    expect(screen.getByText(/IN_PROGRESS/i)).toBeInTheDocument()
    expect(screen.getByText(/TESTING/i)).toBeInTheDocument()
    expect(screen.getByText(/DONE/i)).toBeInTheDocument()
  })

  test('selected task', () => {
    render(<App/>);
    expect(screen.queryByTestId('TaskInfo')).toBeNull()
    act(() => userEvent.click(screen.getByText(/TSK-0001/i)))
    expect(screen.getByTestId('TaskInfo')).toBeInTheDocument()
    expect(screen.getAllByText(/TSK-0001/i)).toHaveLength(2)
    act(() => userEvent.click(screen.getByTestId('TaskInfoClose')))
    expect(screen.queryByTestId('TaskInfo')).toBeNull()
  })
})
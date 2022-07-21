import { TaskTypes } from 'types/taskTypes';

export interface TaskInfoProps {
  task: TaskTypes,
  onClose: () => void,
  status: string,
}
import {TaskTypes} from 'App.types';

export interface TaskInfoProps {
  task: TaskTypes,
  onClose: () => void,
  status: string,
}
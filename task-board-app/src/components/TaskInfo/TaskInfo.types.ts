import {TaskTypes} from 'App.types';
import {Dispatch, SetStateAction} from "react";

export interface TaskInfoProps {
  task: TaskTypes
  onClose: () => void
}
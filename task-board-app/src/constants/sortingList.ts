import {TaskTypes} from "types/taskTypes";
import {importancePriority} from "./importancePriority";

const sortingList = (taskList: TaskTypes[]) => {
  return taskList.sort((a: TaskTypes, b: TaskTypes) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    if (importancePriority[a.importance] > importancePriority[b.importance]) {
      return 1;
    }
    if (importancePriority[a.importance] < importancePriority[b.importance]) {
      return -1;
    }
    return 0;
  });
};

export default sortingList;
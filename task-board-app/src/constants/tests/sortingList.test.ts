import sortingList from "constants/sortingList";
import fakeTaskList from "constants/fakeTaskList"

const taskList2 = [
  {...fakeTaskList[2]},
  {...fakeTaskList[4]},
  {...fakeTaskList[3]},
  {...fakeTaskList[1]},
  {...fakeTaskList[0]},
]

test('sort', () => {
  expect(sortingList(fakeTaskList)).toEqual(taskList2)
});
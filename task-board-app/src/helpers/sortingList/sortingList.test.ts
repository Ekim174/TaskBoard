import sortingList from "helpers/sortingList/sortingList";
import fakeTaskList from "constants/fakeTaskList"

const equalList = [
  {...fakeTaskList[2]},
  {...fakeTaskList[5]},
  {...fakeTaskList[4]},
  {...fakeTaskList[3]},
  {...fakeTaskList[1]},
  {...fakeTaskList[0]},
]

test('sort', () => {
  expect(sortingList(fakeTaskList)).toEqual(equalList)
});
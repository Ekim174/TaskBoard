import { ImportanceTypes } from "types/importanceTypes";

export const importance: {[key: string]: ImportanceTypes}  = {
  'MUST': ImportanceTypes.MUST,
  'SHOULD': ImportanceTypes.SHOULD,
  'COULD': ImportanceTypes.COULD,
};
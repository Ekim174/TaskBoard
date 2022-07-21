import { StatusTypes } from "types/statusTypes";

export const status: {[key: string]: StatusTypes}  = {
  'PLAN': StatusTypes.PLAN,
  'IN PROGRESS': StatusTypes.IN_PROGRESS,
  'TESTING': StatusTypes.TESTING,
  'DONE': StatusTypes.DONE,
};
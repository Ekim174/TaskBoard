
export interface TaskTypes  {
  task_name: string,
  name: string,
  surname: string,
  task_number: string,
  status: Status,
  importance: Importance,
  date: string
}

export enum Status {
  PLAN = 'PLAN',
  IN_PROGRESS = 'IN PROGRESS',
  TESTING = 'TESTING',
  DONE = 'DONE'
}

export enum Importance {
  MUST='MUST',
  SHOULD="SHOULD",
  COULD="COULD"
}
import {TaskPreview} from '@app/api/types';

export const getFutureTasks = (
  tasks: Array<TaskPreview>,
): Array<TaskPreview> => {
  return tasks.filter(
    ({date, big_task}) =>
      new Date(date).getTime() > new Date().getTime() && big_task,
  );
};

export const getMostCurrentTask = (
  tasks: Array<TaskPreview>,
): TaskPreview | undefined => {
  return tasks.find(
    ({date}) =>
      new Date(date).getTime() ===
      Math.min(
        ...tasks.map(({date: dateTemp}) => new Date(dateTemp).getTime()),
      ),
  );
};

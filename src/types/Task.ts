export type Task = {
  id: number;
  title?: string;
  description?: string;
  goal?: string;
  isMain: boolean;
  isDone: boolean;
};

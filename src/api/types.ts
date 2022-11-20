export type AuthResponse = {
  message: string;
  token: string;
};

export type CampaignPreview = {
  camapign_id: number;
  title: string;
  description: string;
};

export type TaskData = {
  task_id: number;
  title: string;
  description: string;
  goal: string;
  documentation: string;
  xp: number;
};

export type TaskPreview = {
  title: string;
  big_task: boolean;
  date: string;
  task_id: string;
};

export type TaskPreviewDict = Record<
  string,
  {
    title: string;
    big_task: boolean;
    date: string;
  }
>;

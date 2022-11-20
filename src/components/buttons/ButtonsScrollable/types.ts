import {TaskPreview} from '@app/api/types';

export type ButtonsScrollableProps = {
  tasks: Array<TaskPreview>;
  navigate: (
    url: string,
    {
      query: {id, campaignId},
    }: {query: {id: string; campaignId: number}},
  ) => void;
  campaignId: number;
};

import {CampaignPreview, TaskPreview} from '@app/api/types';

export type HeaderProps = {
  exp: number;
  campaignData: CampaignPreview;
  mainTask?: TaskPreview;
  navigate: (url: string) => void;
};

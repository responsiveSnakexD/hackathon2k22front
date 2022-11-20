export type MainTaskPageProps = {
  route: {
    params: {
      query: {
        id: string;
        campaignId: number;
      };
    };
  };
  navigation: {
    navigate: (url: string) => void;
  };
};

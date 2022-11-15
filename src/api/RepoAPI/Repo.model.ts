export type SingleRepoModel = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  owner: {
    avatar_url: string;
    html_url: string;
  };
  topics: string[];
  homepage: string;
};

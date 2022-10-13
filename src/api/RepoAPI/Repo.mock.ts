import { request } from 'api/request';
import { RepoListModel } from './Repo.dto';

export const createRepoListMock = () => {
  return request<RepoListModel>([
    {
      id: 1,
      name: 'Repo_name',
      description: 'Description',
      html_url: 'URL_html',
      owner: {
        avatar_url: 'URL_avatar',
        html_url: 'URL_Github'
      },
      topics: ['react', 'recoil', 'typescript']
    }
  ]);
};

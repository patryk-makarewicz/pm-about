import { request } from 'api/request';
import { RepoListModel } from './Repo.dto';

export const createRepoListMock = () => {
  return request<RepoListModel>([
    {
      id: 1,
      name: 'Repo_name',
      description: 'Description',
      homepage: 'URL_homepage',
      html_url: 'URL_html',
      topics: ['react', 'recoil', 'typescript']
    }
  ]);
};

import { request } from 'api/request';
import { RepoListModel } from './Repo.dto';

export const createRepoListMock = () => {
  return request<RepoListModel>([
    {
      id: 1,
      name: 'First_repo_name',
      description: 'First_repo_description',
      homepage: 'First_repo_homepage',
      html_url: 'First_repo_html_url',
      topics: ['react', 'recoil', 'typescript']
    },
    {
      id: 2,
      name: 'Second_repo_name',
      description: 'Second_repo_description',
      homepage: 'Second_repo_homepage',
      html_url: 'Second_repo_html_url',
      topics: ['html5', 'css', 'javascript']
    }
  ]);
};

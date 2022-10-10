import axios from 'axios';
import { useAPImocks } from '../config';
import { RepoListModel } from './Repo.dto';
import { createRepoListMock } from './Repo.mock';

const BASE_URL = 'https://api.github.com/users/patryk-makarewicz';

export const getRepoList = () =>
  useAPImocks
    ? createRepoListMock()
    : axios.get<RepoListModel>(`${BASE_URL}/repos?sort=created`).then(({ data }) => data);

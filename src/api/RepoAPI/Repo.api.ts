import axios from 'axios';
import { useAPImocks } from '../config';

const BASE_URL = 'https://api.github.com/users/patryk-makarewicz';

export const getRepoList = () => axios.get<any>(`${BASE_URL}/repos?sort=created`).then(({ data }) => data);

import { message } from 'antd';
import { QueryKey, RepoAPI } from 'api';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import { RepoListModel } from 'api/RepoAPI/Repo.dto';

export const useRepoList = () => {
  const { t } = useTranslation();
  const [initialLoading, setInitialLoading] = useState(true);

  const { data, isLoading, isError } = useQuery<RepoListModel>([QueryKey.loadRepoList], RepoAPI.getRepoList, {
    refetchOnWindowFocus: false,
    onSettled: () => {
      setInitialLoading(false);
    },
    onError: () => {
      message.error(t('messages.fail.generic'));
    },
  });

  return {
    data: useMemo(() => (data ? data : []), [data]),
    isLoading: isLoading || initialLoading,
    isError,
  };
};

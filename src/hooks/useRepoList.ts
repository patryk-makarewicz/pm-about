import { message } from 'antd';
import { QueryKey, RepoAPI } from 'api';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

export const useRepoList = (enabled: boolean) => {
  const { t } = useTranslation();
  const [initialLoading, setInitialLoading] = useState(true);

  const { data, isLoading, isError, isSuccess, refetch } = useQuery<any>([QueryKey.loadRepoList], RepoAPI.getRepoList, {
    refetchOnWindowFocus: false,
    enabled,
    onSettled: () => {
      setInitialLoading(false);
    },
    onError: () => {
      message.error(t('messages.fail.generic'));
    }
  });

  return {
    data: useMemo(() => (data ? data : []), [data]),
    isLoading: isLoading || initialLoading,
    isError,
    isSuccess,
    refetch
  };
};

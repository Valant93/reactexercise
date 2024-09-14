import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((response) => {
  if (!response.ok) {
    throw new Error('Error fetching the data');
  }
  return response.json();
});

const useGithubUser = (username) => {
  
  const { data: user, error, isLoading } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,  
    fetcher
  );

  return {
    user,
    loading: isLoading,
    error,
  };
};

export default useGithubUser;
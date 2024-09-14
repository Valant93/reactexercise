import useSWR from 'swr';


const fetcher = (url) => fetch(url).then((response) => {
  if (!response.ok) {
    throw new Error('Error fetching the data');
  }
  return response.json();
});

const useGithubUser = (username) => {
  
  const { data: user, error, isLoading, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null, 
    fetcher
  );


  const refetch = async () => {
    if (username) {
     
      await mutate();
    }
  };

  return {
    user,
    loading: isLoading,
    error,
    refetch,  
  };
};

export default useGithubUser;
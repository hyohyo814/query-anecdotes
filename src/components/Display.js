import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getAnecs, updAnec } from '../requests';
import { useNotifDispatch } from '../Context'

const Display = () => {
  const dispatch = useNotifDispatch()
  const queryClient = useQueryClient();
  const updMutation = useMutation(updAnec, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes');
    },
  });

  const handleVote = (anecdote) => () => {
    console.log('vote');
    console.log(anecdote);
    const newObj = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };
    // console.log(newObj);
    updMutation.mutate(newObj);
    dispatch({
      type: 'VOTE',
      payload: anecdote
    })
  };

  const result = useQuery('anecdotes', getAnecs, {
    refetchOnWindowFocus: false,
    retry: 1,
  });
  // console.log(result);

  if (result.isLoading) {
    return <div>loading data...</div>;
  }

  if (result.isError) {
    return <div>anecdote service not available due to problems in server</div>;
  }

  const anecdotes = result.data;
  // console.log(anecdotes);

  const list = anecdotes.map((anecdote) => (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleVote(anecdote)}>vote</button>
      </div>
    </div>
  ));

  return <>{list}</>;
};

export default Display
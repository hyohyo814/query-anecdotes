import { useMutation, useQueryClient } from 'react-query';
import { createAnec } from '../requests';
import { useNotifDispatch } from '../Context'

const AnecdoteForm = () => {
  const dispatch = useNotifDispatch()
  const queryClient = useQueryClient()
  const newMutation = useMutation(createAnec, {
    onSuccess: (newObj) => {
      const anecdotes = queryClient.getQueryData('anecdotes')
      queryClient.setQueryData('anecdotes', anecdotes.concat(newObj))
    },
    onError: () => {
      console.log('Content length must be greater than 5')
    }
  });

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    console.log(content)
    event.target.anecdote.value = '';
    console.log('new anecdote');
    newMutation.mutate({ content, votes: 0 });
    dispatch({
      type: 'NEW_POST',
      payload: content
    })
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;

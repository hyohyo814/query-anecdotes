import { useMutation, useQueryClient } from 'react-query';
import { createAnec } from '../requests';
import { useNotifDispatch } from '../Context';

const AnecdoteForm = () => {
  const dispatch = useNotifDispatch();
  const queryClient = useQueryClient();
  const newMutation = useMutation(createAnec, {
    onSuccess: (newObj) => {
      const anecdotes = queryClient.getQueryData('anecdotes');
      queryClient.setQueryData('anecdotes', anecdotes.concat(newObj));
    },
    onError: () => {
      const lenInv = 'too short anecdote, must have length 5 or more';
      dispatch({
        type: 'NOTIF',
        payload: lenInv,
      });
    },
  });

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    // console.log(content)
    event.target.anecdote.value = '';
    console.log('new anecdote');
    newMutation.mutate({ content, votes: 0 });
    dispatch({
      type: 'NOTIF',
      payload: `${content} added`,
    });
    setTimeout(() => {
      dispatch({ type: 'MSG_RESET' });
    }, 5000);
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

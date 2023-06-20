import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getAnecs, updAnec } from './requests';

import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification';
import Display from './components/Display';

const App = () => {

  return (
    
    <div>
      <h3>Anecdote app</h3>
      <Notification />
      <AnecdoteForm />
      <Display />
    </div>
  );
};

export default App;

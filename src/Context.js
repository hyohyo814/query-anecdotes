import { createContext, useReducer, useContext } from 'react';

const notifReducer = (state='', action) => {
  switch (action.type) {
    case 'NEW_POST':
      console.log('NEW_POST')
      const postNotif = `${action.payload} added`
      return postNotif;
    case 'VOTE':
      console.log('VOTE')
      console.log(action.payload)
      const voteNotif = `you voted ${action.payload.content}`
      return voteNotif;
    case 'MSG_RESET':
      return state
    default:
      return state;
  }
};

const NotifContext = createContext();

export const useNotifValue = () => {
  const notifDispatch = useContext(NotifContext)
  return notifDispatch[0]
}

export const useNotifDispatch = () => {
  const notifDispatch = useContext(NotifContext)
  // console.log(notifDispatch)
  // console.log(notifDispatch[1])
  return notifDispatch[1]
}

export const NotifContextProvider = (props) => {
  const [msg, msgDispatch] = useReducer(notifReducer, '');

  return (
    <NotifContext.Provider value={[msg, msgDispatch]}>
      {props.children}
    </NotifContext.Provider>
  );
};

export default NotifContext;

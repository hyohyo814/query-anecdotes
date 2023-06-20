import { createContext, useReducer, useContext } from 'react';

const initState = '';

const notifReducer = (state = initState, action) => {
  switch (action.type) {
    case 'NOTIF':
      console.log('NOTIF');
      const postNotif = action.payload;
      return postNotif;
    case 'MSG_RESET':
      console.log('RESET');
      return initState;
    default:
      return state;
  }
};

const NotifContext = createContext();

export const useNotifValue = () => {
  const notifDispatch = useContext(NotifContext);
  return notifDispatch[0];
};

export const useNotifDispatch = () => {
  const notifDispatch = useContext(NotifContext);
  // console.log(notifDispatch)
  // console.log(notifDispatch[1])
  return notifDispatch[1];
};

export const NotifContextProvider = (props) => {
  const [msg, msgDispatch] = useReducer(notifReducer, '');
  // console.log(msg)
  return (
    <NotifContext.Provider value={[msg, msgDispatch]}>
      {props.children}
    </NotifContext.Provider>
  );
};

export default NotifContext;

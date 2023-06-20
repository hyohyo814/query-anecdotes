import { useNotifValue } from '../Context';

const Notification = () => {
  const notification = useNotifValue();

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
    display: 'block',
  };

  if (notification === '') {
    // console.log('empty')
    style.display = 'none';
  }

  // console.log(notification)

  return <div style={style}>{notification}</div>;
};

export default Notification;

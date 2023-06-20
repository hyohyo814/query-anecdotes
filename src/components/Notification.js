import { createContext, useReducer } from 'react'
import { useNotifValue } from '../Context'

const Notification = () => {
  const notification = useNotifValue()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification

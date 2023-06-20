import axios from 'axios';
import { isError } from 'react-query';

const baseUrl = 'http://localhost:3001/anecdotes';

export const getAnecs = () =>
  axios.get(baseUrl).then((res) => res.data);

export const createAnec = (content) => 
  axios.post(baseUrl, content)
  .then((res) => {
    if (content.content.length < 5) {
    console.log('too short')
    return res.status(400).end()
  }
  return res.data
})

export const updAnec = updObj =>
  axios.put(`${baseUrl}/${updObj.id}`, updObj)
    .then((res) => res.data)

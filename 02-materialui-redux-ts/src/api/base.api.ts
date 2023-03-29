import axios from 'axios'
import { getEnvironments } from '../helpers/getEnvironments';

const { VITE_RICK_AND_MORTY_URL } = getEnvironments()

export const instance = axios.create({
  baseURL: VITE_RICK_AND_MORTY_URL
})
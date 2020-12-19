import React, { useReducer } from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'

//bring in the action types
import {
  SET_LOADING,
  SEARCH_JOBS,
  GET_JOBS,
} from '../types'

//create the initial state
const GithubState = props => {
  const initialState = {
    jobs: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)


  //SEARCH_JOBS
  const searchJobs = async (state) => {
    setLoading()
    const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${state.description}&location=${state.location}`)


    dispatch({ type: SEARCH_JOBS, payload: res.data })

    console.log(res.data)
  }

  //SET_LOADING
  const setLoading = () => dispatch({ type: SET_LOADING })

  return <GithubContext.Provider
    value={{
      jobs: state.jobs,
      loading: state.loading,
      searchJobs,
    }}
  >
    {props.children}
  </GithubContext.Provider>
}


export default GithubState



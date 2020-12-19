import {
  SET_LOADING,
  SEARCH_JOBS,
  GET_JOBS,
} from '../types'



export default (state, action) => {
  switch (action.type) {

    case SET_LOADING:
      return {
        ...state,//copying the original state
        loading: true,
      }

    case SEARCH_JOBS:
      return {
        ...state,//copying the original state
        jobs: action.payload,
        loading: false,
      }



    //for default case
    default:
      return state
  }
}

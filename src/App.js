import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Topnav from './components/layout/Topnav'
import SearchInput from './components/search/SearchInput'
import Jobs from './components/jobs/Jobs'
import './App.css';

import GithubState from './context/github/GithubState'

const App = () => {
  //setting the state using useState

  // //using useEffect to replace componentdidmount
  // useEffect(() => {
  //   setLoading(true)
  //   async function fetchMyAPI() {
  //     const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`)
  //     setJobs(res.data)
  //     setLoading(false)
  //     console.log(res.data)
  //   }
  //   fetchMyAPI()
  // }, [])
  // //to mimick the componentdidmount

  return (
    <GithubState>
      <div className="App">
        <Topnav />
        <br></br>
        <div className="container">
          <SearchInput />
          <br></br>
          <hr></hr>
          <Jobs />
        </div>
      </div >
    </GithubState>
  )

}
export default App;

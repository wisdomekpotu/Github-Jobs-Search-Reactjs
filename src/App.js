import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Topnav from './components/layout/Topnav'
import SearchInput from './components/search/SearchInput'
import Jobs from './components/jobs/Jobs'
import './App.css';

const App = (searchJobs) => {
  //setting the state using useState
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false)


  //using useEffect to replace componentdidmount
  useEffect(() => {
    setLoading(true)
    async function fetchMyAPI() {
      const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`)
      setJobs(res.data)
      setLoading(false)
      console.log(res.data)
    }
    fetchMyAPI()
  }, [])
  //to mimick the componentdidmount


  searchJobs = async (state) => {
    setLoading(true)
    const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${state.description}&location=${state.location}`)
    setJobs(res.data)
    setLoading(false)
    console.log(res.data)
  }



  return (
    <div className="App">
      <Topnav />
      <br></br>
      <div className="container">
        <SearchInput searchJobs={searchJobs} />
        <br></br>
        <hr></hr>
        <Jobs loading={loading} jobs={jobs} />
      </div>
    </div >
  )

}
export default App;

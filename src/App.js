import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Topnav from './components/layout/Topnav'
import SearchInput from './components/search/SearchInput'
import Jobs from './components/jobs/Jobs'
import './App.css';

class App extends React.Component {
  state = {
    //declaring an initial empty state
    jobs: [],
    loading: false
  }

  async componentDidMount() {
    //to change state use setState
    this.setState({ loading: true })
    const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`)
    this.setState({ jobs: res.data, loading: false })
    console.log(res.data)
  }

  searchJobs = async (formValues) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${formValues['description']}&location=${formValues['location']}`)
    this.setState({ jobs: res.data, loading: false })
    console.log(res.data)
  }



  render() {
    return (
      <div className="App">
        <Topnav />
        <br></br>
        <div className="container">
          <SearchInput searchJobs={this.searchJobs} />
          <br></br>
          <hr></hr>
          <Jobs loading={this.state.loading} jobs={this.state.jobs} />
        </div>
      </div >
    )
  }
}
export default App;

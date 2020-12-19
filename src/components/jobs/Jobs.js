import React, { useContext } from 'react'
import JobsCard from './JobsCard'
import GithubContext from '../../context/github/githubContext';


function Jobs() {
  //initialize github githubContext
  const githubContext = useContext(GithubContext);

  return (
    <div className='flex-container'>
      {githubContext.jobs.map(job => (
        <JobsCard key={job.id} job={job} />
      ))}
    </div>
  )
}





export default Jobs

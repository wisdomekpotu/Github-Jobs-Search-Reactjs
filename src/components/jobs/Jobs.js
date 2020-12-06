import React from 'react'
import JobsCard from './JobsCard'
import PropTypes from 'prop-types'



function Jobs(props) {
  return (
    <div className='flex-container'>
      {props.jobs.map(job => (
        <JobsCard key={job.id} job={job} />
      ))}
    </div>
  )
}



//declaring prop types for props used
Jobs.propTypes = {
  jobs: PropTypes.array.isRequired,
}

export default Jobs

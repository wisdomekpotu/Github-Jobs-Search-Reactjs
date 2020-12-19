import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import GithubContext from '../../context/github/githubContext';


const SearchInput = (props) => {
  //initialize github githubContext
  const githubContext = useContext(GithubContext);

  const [state, setState] = React.useState({
    description: "",
    location: ""
  })

  const handleChange = e => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
    console.log(value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    githubContext.searchJobs(state)//sending this props to the App.js
    setState('');
    //this last part is to set the input filed value to nothing
  }


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Label>Search By Keyword</Form.Label>
          <Form.Control type="text" name="description" placeholder="Enter Your title, keyword..." value={state.description} onChange={handleChange} />
        </Form.Group>
        <Form.Group >
          <Form.Label>Search By Location</Form.Label>
          <Form.Control type="text" name="location" placeholder="enter your location" value={state.location} onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Search Here
          </Button>
      </Form>
    </div >
  )

}
export default SearchInput;

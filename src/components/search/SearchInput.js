import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



class App extends React.Component {
  state = {
    formValues: {}
  };

  handleChange = e => {
    e.preventDefault();
    let formValues = this.state.formValues;
    let name = e.target.name;
    let value = e.target.value;


    formValues[name] = value;

    this.setState({ formValues })
    console.log(formValues);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchJobs(this.state.formValues)//sending this props to the App.js
    this.setState({ formValues: {} });
    //this last part is to set the input filed value to nothing
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group >
            <Form.Label>Search By Keyword</Form.Label>
            <Form.Control type="text" name="description" placeholder="Enter Your title, keyword..." value={this.state.formValues["description"]} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Search By Location</Form.Label>
            <Form.Control type="text" name="location" placeholder="enter your location" value={this.state.formValues["location"]} onChange={this.handleChange} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Search Here
          </Button>
        </Form>
      </div >
    )
  }
}

export default App;

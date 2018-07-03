import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    // console.log(this.props);
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(response => {
      console.log(response);
      this.setState({
        students: response.data
      })
    })
    console.log(this.state.students)
  }

  render() {
    var studentsArr = this.state.students.map((student, i) => (<Link to={`/student/${student.id}`} key={i}><h3>{student.first_name} {student.last_name}</h3></Link>))
      return (
      <div className="box">
        <Link to="/"><h1 className="backButtons">Back to Home</h1></Link>
        <h1></h1>
        <h2>ClassList:</h2>
        {studentsArr}
      </div>
    )
  }
}
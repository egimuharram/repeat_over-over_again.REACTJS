// DESTRUCTURING
import React, { Component } from 'react';

import ListStudents from './ListStudents';

export default class FormStudents extends Component{
    // STATE
    constructor () {
        super()
        this.state = {
            currrentStudentName: ''
    } 
}

    addNewStudent(){
        this.props.addStudent(
            this.state.currrentStudentName,
            99
        )
    }
        render() {
          return (
            <div>
            <span> { this.state.currrentStudentName } </span><br/>
              <input
              type="text"
              name="student_name"
              onChange={(e) => this.setState({ currrentStudentName: e.target.value })}/>
              <br/><br/>
              <input
              type="submit"
              value="add student"
              onClick={ () => this.addNewStudent() }/>
              
            </div>
      );
    }   
}
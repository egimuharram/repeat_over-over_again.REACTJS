import React, { Component } from 'react';

export default class ListStudents extends Component{
    
        render() {
          return (
            <div>
            <ul>
            { this.props.students.map( (student, idx) => {
            return <li key={idx}>{ student.name }, age { student.age }</li>
            })}
            </ul>
            </div>
          )
        }
    }
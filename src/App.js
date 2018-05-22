// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// // COMPONENT
// import Header from './Components/Header';
// import Form from './Components/FormStudents';
// import ListStudents from './Components/ListStudents';

// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       students: [{
//         name: 'john doe',
//         age: 30
//       }],
//     }
//   }

  
//   addStudent(name, age) {
//     // const state = this.state
//     // debugger
//     let currentStudents = this.state.students
//     let newStudent = {name,age}
//     currentStudents.push(newStudent)
//     this.setState({
//       students: currentStudents
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <Header/>
//         <Form addStudent={ (name, age) => this.addStudent(name, age) }/>
//         <h2> Students: </h2>
//         <ListStudents students={ this.state.students }/>
//       </div>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react';

import Child from './Components/Child';

export default class App extends Component{
  //State
  constructor (props) {
    super()
    this.state = {texts: [], color: ''}
    this.changeColor = this.changeColor.bind(this)
    this.counterClick = this.counterClick.bind(this)
  }
  
  //ComponentDidMount
  componentDidMount(){
    this.setState({ texts: ['ReactJS', 'Asik', 'Yoman'], color: 'green', counter: 0 })
  }

  changeColor(){
    if (this.state.color === 'green'){
      this.setState({color: 'blue'})
    } else {
      this.setState({color: 'green'})
    }
  }

  counterClick(){
    this.setState({counter: this.state.counter +1})
  }

  render(){
   

    let texts = this.state.texts.map((text) => {
      return(
        <Child text = {text} counterClick = {this.counterClick}/>
    )
    })

    let style = {color: this.state.color}
    return(
      //props
      <div className="App"
      style={style}
      onClick={this.changeColor}>
        yooooww
        <br/>
        {texts}
        {this.state.counter}
      </div>
    )
  }
}
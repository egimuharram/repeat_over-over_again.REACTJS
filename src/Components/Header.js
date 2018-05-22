import React, { Component } from 'react';

export default class Header extends Component{
    constructor(){
        super()

    }
        render(){
            return(
                <div>
                    <h1>THIS IS HEADER COMPONENT</h1> 
                <ul>
                    <li>Home</li>
                    <li>List Students</li>
                    <li>Add Students</li>
                </ul>
                </div>
        );
    }
}
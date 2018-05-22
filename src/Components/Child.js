import React, { Component } from 'react';

export default class Child extends Component{
    render(){
        return(
            <div
            onClick={this.props.counterClick}>
                {this.props.text}
            </div>
        );
    }
}
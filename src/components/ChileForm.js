import React, { Component, useState, Fragment } from 'react'
import ChileArg from './ChileArg'

class ChileForm extends Component {

    constructor(props) {
        super(props);
        this.state = this.props.args.reduce((state, arg) => {
            state[[arg.name]] = arg.value;
            return state;
        }, {});
    }

    getArgs = () => this.props.args.map((arg, i) => 
            <ChileArg key={i}
                      name={arg.name}
                      type={arg.type}
                      value={this.state[[arg.name]]}
                      enabled={arg.enabled}
                      required={arg.required}
                      options={arg.options}
                      changeValue={val=>this.setState({[arg.name]: val})} />
        );

    render() {
        return this.getArgs();
    }
}

export default ChileForm;

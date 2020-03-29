import React, { Component } from 'react'
import ChileArg from './ChileArg'

class ChileForm extends Component {

    constructor(props) {
        super(props);
        this.state = this.props.args.reduce((state, arg) => {
            state[[arg.name]] = arg.value ?? null;
            return state;
        }, {});
    }

    getArgs = () => this.props.args.map((arg, i) =>
        <ChileArg key={i}
            name={arg.name}
            nickname={arg.nickname}
            type={arg.type}
            value={this.state[[arg.name]]}
            enabled={arg.enabled}
            required={arg.required}
            options={arg.options}
            onValueChange={val => this.setState({ [arg.name]: val },
                () => this.props.onFormUpdate({ ...this.state }))} />
    );

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {this.getArgs()}
            </div>
        );
    }
}

export default ChileForm;

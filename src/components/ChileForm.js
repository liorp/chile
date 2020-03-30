import React, { Component } from 'react'
import { Button } from '@material-ui/core';
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

    isValid = () => {
        return this.props.args.filter(a => a.required &&
            (this.state[[a.name]] == null || this.state[[a.name]] === '')).length == 0;
    }

    render() {
        const { completeButton, onComplete } = this.props;
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {this.getArgs()}
                {completeButton
                    ? <Button variant="outlined" disabled={!this.isValid()}
                    onClick={()=>onComplete(this.state)}>{completeButton}</Button>
                    : ''}
            </div>
        );
    }
}

export default ChileForm;

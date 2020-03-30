import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import ChileArg from './ChileArg';


function ChileForm(props) {

    const initialArgs = props.args.reduce((state, arg) => {
        state[[arg.name]] = arg.value ?? null;
        return state;
    }, {});
    const [args, setArgs] = useState(initialArgs);

    useEffect(() => props.onFormUpdate({ ...args }));

    const getChileArgs = () => props.args.map((arg, i) =>
        <ChileArg key={i}
            name={arg.name}
            nickname={arg.nickname}
            type={arg.type}
            value={args[[arg.name]]}
            enabled={arg.enabled}
            required={arg.required}
            options={arg.options}
            onValueChange={val => setArgs({ ...args, [arg.name]: val }) } />
    );

    const getCompleteButton = () => {
        const { completeButton, onComplete } = props;
        return completeButton
            ? <Button variant="outlined"
                      disabled={!isValid()}
                      onClick={() => onComplete(args)}>
                    {completeButton}
              </Button>
            : '';
    };

    const isValid = () => {
        return props.args.filter(a => a.required &&
            (args[[a.name]] == null || args[[a.name]] === '')).length == 0;
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {getChileArgs()}
            {getCompleteButton()}
        </div>
    );
}

export default ChileForm;

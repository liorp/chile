import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import ChileArg from './ChileArg/ChileArg';


function ChileForm({
  initialArgs, onFormUpdate, completeButton, onComplete,
}) {
  // TODO: Refactor the initial args to set the argument default value (perhaps from server?)
  const [args, setArgs] = useState(initialArgs);

  // TODO: Maybe use formik?
  useEffect(() => onFormUpdate({ ...args }));

  const getChileArgs = () => args.map((arg) => (
    <ChileArg
      key={arg.name}
      name={arg.name}
      nickname={arg.nickname}
      type={arg.type}
      value={args[[arg.name]]}
      enabled={arg.enabled}
      required={arg.required}
      options={arg.options}
      onValueChange={(val) => setArgs({ ...args, [arg.name]: val })}
    />
  ));

  const isValid = () => args.filter((a) => a.required
      && (args[[a.name]] == null || args[[a.name]] === '')).length === 0;

  const getCompleteButton = () => (completeButton
    ? (
      <Button
        variant="outlined"
        disabled={!isValid()}
        onClick={() => onComplete(args)}
      >
        {completeButton}
      </Button>
    )
    : '');

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {getChileArgs()}
      {getCompleteButton()}
    </div>
  );
}

// TODO: Doc this properly
ChileForm.propTypes = {
  initialArgs: PropTypes.string.isRequired,
  onFormUpdate: PropTypes.func.isRequired,
  completeButton: PropTypes.element.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default ChileForm;
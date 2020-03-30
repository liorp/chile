import React, { useState, useCallback, Fragment } from 'react';
import ChileDialogContext from './Context';
import ChileDialog from './Dialog';

const _defaultOptions = {
  title: 'Are you sure?',
  description: '',
  confirmationText: 'Ok',
  cancellationText: 'Cancel',
  dialogProps: {},
  confirmationButtonProps: {},
  cancellationButtonProps: {},
};

const ChileDialogProvider = ({ children, defaultOptions = {} }) => {
  const [options, setOptions] = useState({ ..._defaultOptions, ...defaultOptions });
  const [resolveReject, setResolveReject] = useState([]);
  const [resolve, reject] = resolveReject;

  const confirm = useCallback((options = {}) => {
    return new Promise((resolve, reject) => {
      setOptions({ ..._defaultOptions, ...defaultOptions, ...options });
      setResolveReject([resolve, reject]);
    });
  }, [defaultOptions]);

  const handleClose = useCallback(() => {
    setResolveReject([]);
  }, []);

  const handleCancel = useCallback(() => {
    reject();
    handleClose();
  }, [reject, handleClose]);

  const handleConfirm = useCallback(() => {
    resolve();
    handleClose();
  }, [resolve, handleClose]);

  return (
    <Fragment>
      <ChileDialogContext.Provider value={confirm}>
        {children}
      </ChileDialogContext.Provider>
      <ChileDialog
        open={resolveReject.length === 2}
        options={options}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </Fragment>
  );
};

export default ChileDialogProvider;

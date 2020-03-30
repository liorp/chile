import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import ChileDialogContext from './Context';
import ChileDialog from './Dialog';

const ChileDialogProvider = ({ children, defaultOptions }) => {
  const [options, setOptions] = useState({ ...defaultOptions });
  const [resolveReject, setResolveReject] = useState([]);
  const [resolve, reject] = resolveReject;

  const confirm = useCallback((_options = {}) => new Promise((resolvePromise, rejectPromise) => {
    setOptions({ ...defaultOptions, ..._options });
    setResolveReject([resolvePromise, rejectPromise]);
  }), [defaultOptions]);

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
    <>
      <ChileDialogContext.Provider value={confirm}>
        {children}
      </ChileDialogContext.Provider>
      <ChileDialog
        open={resolveReject.length === 2}
        options={options}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </>
  );
};

ChileDialogProvider.propTypes = {
  children: PropTypes.element.isRequired,
  defaultOptions: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    children: PropTypes.element,
    actions: PropTypes.shape({
      cancel: PropTypes.shape({
        text: PropTypes.string,
      }),
      confirm: PropTypes.shape({
        text: PropTypes.string,
      }),
    }),
  }),
};

ChileDialogProvider.defaultProps = {
  defaultOptions: {},
};

export default ChileDialogProvider;

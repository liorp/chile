import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

const ChileDialog = ({
  open, options, onCancel, onConfirm,
}) => {
  const {
    title,
    content,
    children,
    actions,
  } = options;

  return (
    <Dialog fullWidth open={open} onClose={onCancel}>
      {title && (
        <DialogTitle>{title}</DialogTitle>
      )}
      {content && (
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
      )}
      {children}
      {actions && (
        <DialogActions>
          {actions.cancel && (
            <Button onClick={onCancel}>
              {actions.cancel.text}
            </Button>
          )}
          {actions.confirm && (
            <Button color="primary" onClick={onConfirm}>
              {actions.confirm.text}
            </Button>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
};

ChileDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  options: PropTypes.shape({
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
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

ChileDialog.defaultProps = {
  options: {},
};

export default ChileDialog;

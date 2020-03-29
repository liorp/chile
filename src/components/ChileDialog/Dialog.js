import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ChileDialog = ({open, options, onCancel, onConfirm}) => {
    const {
        title,
        content,
        children,
        dialogProps,
        actions
    } = options;

    return (
        <Dialog fullWidth {...dialogProps} open={open} onClose={onCancel}>
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
                        <Button {...actions.cancel.props} onClick={onCancel}>
                            {actions.cancel.text}
                        </Button>
                    )}
                    {actions.confirm && (
                        <Button color="primary" {...actions.confirm.props} onClick={onConfirm}>
                            {actions.confirm.text}
                        </Button>
                    )}
                </DialogActions>
            )}
        </Dialog>
    );
};

export default ChileDialog;

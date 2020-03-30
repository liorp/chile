import React from 'react';

const ChileError = ({ error }) => {
    return (
        <div>
            Error occurred:
            {error.message}
        </div>
    );
};

export default ChileError;

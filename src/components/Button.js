import React from 'react';

function Button({ disabled, clickHandler, children }) {
    return (
        <button
            className="button"
            type="button"
            disabled={disabled}
            onClick={clickHandler}
        >
            { children }
        </button>
    );
}

export default Button;
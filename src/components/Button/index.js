import React from 'react';

function Button({ disabled, title }) {
  return (
    <button
      className="btn btn-primary btn-block"
      type="submit"
      disabled={disabled}
    >
      {disabled ? (
        <>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Loading...</span>
        </>
      ) : (
        title
      )}
    </button>
  );
}

export default Button;

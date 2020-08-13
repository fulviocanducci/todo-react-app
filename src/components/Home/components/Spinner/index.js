import React from 'react';

export default function Spinner() {
  return (
    <div className="d-flex justify-content-center mt-2">
      <div className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

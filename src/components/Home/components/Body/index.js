import React from 'react';

const Body = ({ children, title }) => (
  <div className="my-3 p-3 bg-white rounded shadow-sm">
    <h6 className="border-bottom border-gray pb-2 mb-0">{title}</h6>
    {children}
  </div>
);

export default Body;

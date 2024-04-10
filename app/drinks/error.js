'use client';

import React from 'react';

const error = (error) => {
  //   return <div>there was an error...</div>;
  return <div>{error.error.message}</div>;
};

export default error;

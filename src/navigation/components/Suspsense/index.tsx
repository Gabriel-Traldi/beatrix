import React, { PropsWithChildren } from 'react';

const Suspense: React.FC<PropsWithChildren> = ({ children }) => {
  return <React.Suspense fallback={<>Loading...</>}>{children}</React.Suspense>;
};

export default Suspense;

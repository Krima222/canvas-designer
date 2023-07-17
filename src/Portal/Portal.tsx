import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('react-modals');

interface IPortal {
  children: ReactNode;
  className?: string;
}

export const Portal: React.FC<IPortal> = ({ className, children }) => {
  return root ? ReactDOM.createPortal(<div>{children}</div>, root) : null;
};

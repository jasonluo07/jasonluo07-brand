'use client';

import { ReactNode } from 'react';
import { Link } from 'react-scroll';

type ScrollLinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const ScrollLink = function ({ to, children, className, onClick }: ScrollLinkProps) {
  return (
    <Link className={`cursor-pointer ${className}`} to={to} onClick={onClick} smooth={true} offset={-73} duration={300}>
      {children}
    </Link>
  );
};

export default ScrollLink;

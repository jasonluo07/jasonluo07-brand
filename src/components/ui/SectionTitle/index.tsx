import { ReactNode } from 'react';

import ScrollLink from '../ScrollLink';
import TealDivider from './TealDivider';

type SectionTitleProps = {
  to: string;
  children: ReactNode;
};

const SectionTitle = function ({ to, children }: SectionTitleProps) {
  return (
    <>
      <h2 className="text-center text-4xl font-bold">
        <ScrollLink to={to}>{children}</ScrollLink>
      </h2>
      <TealDivider />
    </>
  );
};

export default SectionTitle;

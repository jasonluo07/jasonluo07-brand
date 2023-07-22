import { RxDoubleArrowUp } from 'react-icons/rx';

import { ScrollLink } from '@/components/ui';

type ReturnTopSectionProps = {
  appendClass?: string;
};

const ReturnTopSection = function ({ appendClass }: ReturnTopSectionProps) {
  return (
    <section className={`mb-2 h-[35px] ${appendClass}`}>
      <ScrollLink to="hero" className="mb-[-20px] mt-6 block md:mt-10">
        <RxDoubleArrowUp size={35} className="mx-auto animate-bounce" />
      </ScrollLink>
    </section>
  );
};

export default ReturnTopSection;

'use client';

import { useTheme } from 'next-themes';

import { TealDivider } from '@/components/ui';

type LocationSectionProps = {
  appendClass?: string;
};

const LocationSection = function ({ appendClass }: LocationSectionProps) {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section id="Location" className={appendClass}>
      <h2 className="text-center text-4xl font-bold">Location</h2>
      <TealDivider />
      <p className="text-center md:text-lg">
        You can find me at{' '}
        <a href="https://goo.gl/maps/TYw1Wp3Y1ojWeueQ6" rel="noopener noreferrer" target="_blank">
          <strong className="text-teal-600">Taipei 101</strong>
        </a>{' '}
        in Taipei, Taiwan.
      </p>
      <div className="mt-4 flex justify-center px-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0119804645296!2d121.56124116148696!3d25.033667488211417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da80a7ad%3A0xacc4d11dc963103c!2sTaipei%20101%20Shopping%20center!5e0!3m2!1sen!2stw!4v1690018964789!5m2!1sen!2stw"
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
          width={900}
          height={600}
          allowFullScreen
          className={`h-[360px] w-[600px] border-0 md:h-[480px] md:w-[720px] lg:h-[540px] lg:w-[900px] ${
            !isLight && 'invert-90'
          }`}
        />
      </div>
    </section>
  );
};

export default LocationSection;

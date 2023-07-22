import { TealDivider } from '@/components/ui';

type WhereIAmSectionProps = {
  appendClass?: string;
};

const WhereIAmSection = function ({ appendClass }: WhereIAmSectionProps) {
  return (
    <section id="whereIAm" className={appendClass}>
      <h2 className="text-center text-4xl font-bold">Where I am</h2>
      <TealDivider />
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0119804645296!2d121.56124116148696!3d25.033667488211417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da80a7ad%3A0xacc4d11dc963103c!2sTaipei%20101%20Shopping%20center!5e0!3m2!1sen!2stw!4v1690018964789!5m2!1sen!2stw"
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
          width={900}
          height={600}
          allowFullScreen
          className="h-[400px] w-[600px] border-0 lg:h-[600px] lg:w-[900px]"
        />
      </div>
    </section>
  );
};

export default WhereIAmSection;

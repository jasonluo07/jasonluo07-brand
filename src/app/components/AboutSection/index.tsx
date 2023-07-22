import Image from 'next/image';

import { TealDivider } from '@/components/ui';

type SkillCategory = 'frontend' | 'backend' | 'tools';

type Skill = {
  name: string;
  category: SkillCategory;
  style: string;
};

const SKILLS: Skill[] = [
  { name: 'HTML', category: 'frontend', style: 'bg-sky-200 text-sky-500' },
  { name: 'CSS', category: 'frontend', style: 'bg-sky-200 text-sky-500' },
  { name: 'JavaScript', category: 'frontend', style: 'bg-sky-200 text-sky-500' },
  { name: 'TypeScript', category: 'frontend', style: 'bg-sky-200 text-sky-500' },
  { name: 'React', category: 'frontend', style: 'bg-sky-200 text-sky-500' },
  { name: 'Next.js', category: 'frontend', style: 'bg-sky-200 text-sky-500' },
  { name: 'Redux', category: 'frontend', style: 'bg-sky-200 text-sky-500' },
  { name: 'Tailwind CSS', category: 'frontend', style: 'bg-sky-200 text-sky-500' },
  { name: 'Node.js', category: 'backend', style: 'bg-amber-200 text-amber-500' },
  { name: 'SQL', category: 'backend', style: 'bg-amber-200 text-amber-500' },
  { name: 'Redis', category: 'backend', style: 'bg-amber-200 text-amber-500' },
  { name: 'Socket.io', category: 'backend', style: 'bg-amber-200 text-amber-500' },
  { name: 'Python', category: 'backend', style: 'bg-amber-200 text-amber-500' },
  { name: 'Django', category: 'backend', style: 'bg-amber-200 text-amber-500' },
  { name: 'Selenium', category: 'backend', style: 'bg-amber-200 text-amber-500' },
  { name: 'Web Crawler', category: 'backend', style: 'bg-amber-200 text-amber-500' },
  { name: 'Git', category: 'tools', style: 'bg-lime-200 text-lime-500' },
  { name: 'GitHub', category: 'tools', style: 'bg-lime-200 text-lime-500' },
  { name: 'Jenkins', category: 'tools', style: 'bg-lime-200 text-lime-500' },
  { name: 'GitHub Actions', category: 'tools', style: 'bg-lime-200 text-lime-500' },
  { name: 'Docker', category: 'tools', style: 'bg-lime-200 text-lime-500' },
];

type AboutSectionProps = {
  appendClass?: string;
};

const AboutSection = function ({ appendClass }: AboutSectionProps) {
  return (
    <section id="about" className={`${appendClass}`}>
      <h2 className="text-center text-4xl font-bold">About</h2>
      <TealDivider />
      <div className="flex flex-col space-y-10 md:mt-8 md:flex-row md:space-x-10 md:space-y-0">
        <div>
          <h3 className="mb-6 text-center text-2xl font-bold md:text-left">Get to know me!</h3>
          <article className="flex flex-col space-y-6 text-lg">
            <p>
              Hello, my name is Jason, and I am an passionate and self-motivated fullstack developer located in Taipei,
              Taiwan.
            </p>
            <p>
              My studies in Physics at National Taiwan University laid a strong foundation for my problem-solving
              capabilities and analytical thinking.
            </p>
            <p>
              In addition to my academic pursuits, I have a passion for various activities that keep me engaged and
              continuously learning. One of my favorite hobbies is bouldering, where I challenge myself to conquer
              climbing routes and improve my strength and agility. I also enjoy exploring the underwater world through
              scuba diving, immersing myself in the beauty and serenity of the ocean.
            </p>
            <p>
              I firmly believe in the value of constant growth and pushing the boundaries of what is possible. With a
              deep fascination for technology, I am always eager to expand my knowledge and skills in the field of
              fullstack engineering.
            </p>
            <p>
              I am excited about the opportunities that lie ahead in my career, and I am open to new challenges that
              will allow me to make meaningful contributions and further develop as a fullstack engineer.
            </p>
          </article>
        </div>
        <div className="md:relative">
          <h3 className="mb-6 text-center text-2xl font-bold md:text-left">My Skills</h3>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {SKILLS.map((skill) => (
              <p key={skill.name} className={`rounded px-4 py-2 font-semibold ${skill.style}`}>
                {skill.name}
              </p>
            ))}
          </div>
          <div className="mt-6 flex justify-end">
            <Image
              src="/Bouldering_Cat.jpeg"
              alt="Bouldering Cat"
              width={240}
              height={240}
              className="hidden md:block md:rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import Image from 'next/image';

import { SectionTitle } from '@/components/ui';

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
      <SectionTitle to="about">About</SectionTitle>
      <div className="flex flex-col space-y-10 md:mt-8 md:flex-row md:space-x-10 md:space-y-0">
        <div>
          <h3 className="mb-6 text-center text-2xl font-bold md:text-left">Get to know me!</h3>
          <article className="flex flex-col space-y-6 text-lg">
            <p>
              Hello, my name is Jason, and I am a passionate and self-motivated fullstack developer located in Taipei,
              Taiwan. My studies in Physics at National Taiwan University laid a strong foundation for my
              problem-solving capabilities and analytical thinking. With a year of experience as a fullstack engineer, I
              have accumulated professional skills and knowledge in practical work.
            </p>
            <p>
              Currently, I am working as a backend engineer at a Game Company, focusing on developing and maintaining
              high-performance, scalable backend systems. In this role, I have not only deepened my technical expertise
              but also learned to collaborate with cross-functional teams to achieve business goals.
            </p>
            <p>
              In addition to my professional pursuits, I have a passion for various activities such as bouldering and
              scuba diving. Challenging myself to conquer climbing routes and exploring the beauty and tranquility of
              the ocean, these interests not only keep me energized but also help cultivate my creativity and
              problem-solving abilities in work.
            </p>
            <p>
              I firmly believe in the value of constant growth and pushing the boundaries of what is possible. With a
              deep fascination for technology, I am always eager to expand my knowledge and skills in the field of web
              development.
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

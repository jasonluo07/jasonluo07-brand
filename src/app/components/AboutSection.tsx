import Image from 'next/image';

const SKILLS = [
  { name: 'HTML', style: 'bg-gray-200 text-gray-500' },
  { name: 'CSS', style: 'bg-gray-200 text-gray-500' },
  { name: 'JavaScript', style: 'bg-gray-200 text-gray-500' },
  { name: 'TypeScript', style: 'bg-gray-200 text-gray-500' },
  { name: 'React', style: 'bg-gray-200 text-gray-500' },
  { name: 'Next.js', style: 'bg-gray-200 text-gray-500' },
  { name: 'Redux', style: 'bg-gray-200 text-gray-500' },
  { name: 'Tailwind CSS', style: 'bg-gray-200 text-gray-500' },
  { name: 'Node.js', style: 'bg-gray-200 text-gray-500' },
  { name: 'SQL', style: 'bg-gray-200 text-gray-500' },
  { name: 'Redis', style: 'bg-gray-200 text-gray-500' },
  { name: 'Socket.io', style: 'bg-gray-200 text-gray-500' },
  { name: 'Python', style: 'bg-gray-200 text-gray-500' },
  { name: 'Django', style: 'bg-gray-200 text-gray-500' },
  { name: 'Selenium', style: 'bg-gray-200 text-gray-500' },
  { name: 'Web Crawler', style: 'bg-gray-200 text-gray-500' },
  { name: 'Git', style: 'bg-gray-200 text-gray-500' },
  { name: 'GitHub', style: 'bg-gray-200 text-gray-500' },
  { name: 'Jenkins', style: 'bg-gray-200 text-gray-500' },
  { name: 'GitHub Actions', style: 'bg-gray-200 text-gray-500' },
  { name: 'Docker', style: 'bg-gray-200 text-gray-500' },
];

const AboutSection = function () {
  return (
    <section id="about">
      <h2 className="text-center text-4xl font-bold">About Me</h2>
      <hr className="mx-auto my-4 h-1 w-6 rounded-lg border-0 bg-teal-500" />
      <div className="flex flex-col space-y-10 md:flex-row md:space-x-10 md:space-y-0">
        <div>
          <h3 className="mb-6 text-center text-2xl font-bold md:text-left">Get to know me!</h3>
          <article className="flex flex-col space-y-6 text-lg">
            <p>
              Hello, my name is Jason, and I am an passionate and self-motivated fullstack developer based in Taipei,
              Taiwan.
            </p>
            <p>
              I pursued my studies at National Taiwan University with a focus on Physics. While I did not complete my
              degree, the time I spent studying there has provided me with a strong foundation in problem-solving and
              analytical thinking.
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
          <Image
            src="/Bouldering_Cat.jpeg"
            alt="Bouldering Cat"
            width={325}
            height={325}
            className="hidden md:absolute md:bottom-0 md:right-0 md:block md:rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import Image from 'next/image';
import { BsArrowUpRightSquare, BsGithub } from 'react-icons/bs';

type ProjectItemProps = {
  title: string;
  description: string;
  repoHref: string;
  demoHref: string;
};

const ProjectItem = function ({ title, description, repoHref, demoHref }: ProjectItemProps) {
  return (
    <div className="md:flex md:gap-x-8">
      <Image
        src="https://fakeimg.pl/720x420/"
        alt="Fake Image"
        width={720}
        height={420}
        sizes="100%"
        className="rounded-xl shadow-xl hover:opacity-70"
      />
      <div className="mt-8 md:mt-0">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="mt-6 text-xl">{description}</p>
        <div className="mt-4 flex gap-x-4">
          <a href={repoHref} rel="noopener noreferrer" target="_blank">
            <BsGithub size={30} />
          </a>
          <a href={demoHref} rel="noopener noreferrer" target="_blank">
            <BsArrowUpRightSquare size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

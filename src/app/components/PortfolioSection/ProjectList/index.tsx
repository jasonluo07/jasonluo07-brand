import ProjectItem from './ProjectItem';

const PROJECTS = [
  {
    title: 'Project 1',
    description:
      'This project was built from scratch with technologies such as HTML, CSS, JavaScript, and uses Node.js and MongoDB as the backend. The tool features a simple, user-friendly interface that helps you manage your daily tasks efficiently.',
    repoHref: 'https://github.com',
    demoHref: 'https://github.com',
  },
  {
    title: 'Project 2',
    description:
      'This project was built from scratch with technologies such as HTML, CSS, JavaScript, and uses Node.js and MongoDB as the backend. The tool features a simple, user-friendly interface that helps you manage your daily tasks efficiently.',
    repoHref: 'https://github.com',
    demoHref: 'https://github.com',
  },
  {
    title: 'Project 3',
    description:
      'This project was built from scratch with technologies such as HTML, CSS, JavaScript, and uses Node.js and MongoDB as the backend. The tool features a simple, user-friendly interface that helps you manage your daily tasks efficiently.',
    repoHref: 'https://github.com',
    demoHref: 'https://github.com',
  },
  {
    title: 'Project 4',
    description:
      'This project was built from scratch with technologies such as HTML, CSS, JavaScript, and uses Node.js and MongoDB as the backend. The tool features a simple, user-friendly interface that helps you manage your daily tasks efficiently.',
    repoHref: 'https://github.com',
    demoHref: 'https://github.com',
  },
];

const ProjectList = function () {
  return (
    <div className="space-y-28 md:mt-8">
      {PROJECTS.map((project) => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;

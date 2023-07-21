import type { IconType } from 'react-icons';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai';

type SocialMediaLink = {
  href: string;
  Icon: IconType;
};

const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  {
    href: 'https://github.com',
    Icon: AiOutlineGithub,
  },
  {
    href: 'https://twitter.com',
    Icon: AiOutlineTwitter,
  },
  {
    href: 'https://www.linkedin.com/in',
    Icon: AiOutlineLinkedin,
  },
  {
    href: 'https://www.youtube.com/channel',
    Icon: AiOutlineYoutube,
  },
];

const SocialMediaLinks = function () {
  return SOCIAL_MEDIA_LINKS.map(({ href, Icon }) => (
    <a key={href} href={href} rel="noopener noreferrer" target="_blank">
      <Icon className="text-neutral-500 transition-transform hover:-translate-y-1 dark:text-neutral-100" size={30} />
    </a>
  ));
};

export default SocialMediaLinks;

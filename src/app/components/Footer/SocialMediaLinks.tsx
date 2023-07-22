import type { IconType } from 'react-icons';
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';

type SocialMediaLink = {
  href: string;
  Icon: IconType;
};

const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  {
    href: 'https://github.com/jasonluo07',
    Icon: AiOutlineGithub,
  },
  {
    href: 'https://www.linkedin.com/in/shiweiluo',
    Icon: AiOutlineLinkedin,
  },
  {
    href: 'https://www.instagram.com/qobdop777',
    Icon: AiOutlineInstagram,
  },
  {
    href: 'https://twitter.com',
    Icon: AiOutlineTwitter,
  },
];

const SocialMediaLinks = function () {
  return SOCIAL_MEDIA_LINKS.map(({ href, Icon }) => (
    <a key={href} href={href} rel="noopener noreferrer" target="_blank">
      <Icon className="transition-transform hover:-translate-y-1" size={30} />
    </a>
  ));
};

export default SocialMediaLinks;

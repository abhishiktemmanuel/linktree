import { BsLinkedin, BsInstagram, BsTwitterX, BsSpotify } from "react-icons/bs";
import React from 'react';

interface Social {
  url: string;
  icon: React.ReactNode;
  alt: string;
}

const SocialsIconLink: React.FC = () => {
  const socials: Social[] = [
    {
      url: "https://www.linkedin.com/in/abhishikt-emmanuel-prakash-651a43174/",
      icon: <BsLinkedin size={26} />,
      alt: "LinkedIn"
    },
    {
      url: "https://www.instagram.com/iam_abhishikt",
      icon: <BsInstagram size={26} />,
      alt: "InstaBsam"
    },
    {
      url: "https://x.com/iam_abhishikt",
      icon: <BsTwitterX size={26} />,
      alt: "Twitter"
    },
    {
      url: "https://open.spotify.com/user/sfw39buctjue4ben2j2klngpi",
      icon: <BsSpotify size={26} />,
      alt: "Spotify"
    }
  ];

  return (
    <div className='mb-6 mt-2 flex justify-evenly'>
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 px-2 transition-opacity text-white dark:text-white"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialsIconLink;

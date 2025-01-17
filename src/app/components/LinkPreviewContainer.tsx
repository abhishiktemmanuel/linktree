'use client';

import { FC } from 'react';
import { LinkContainer, ThreeDotsButton } from '../styles/sharedStyles';
import { LinkPreview } from './ui/link-preview';
import { IconContext } from 'react-icons';

interface LinkProps {
  link: {
    title: string;
    url: string;
    icon: React.ComponentType<{ size?: number }>;
  };
  onShare: (url: string) => void;
}

const LinkPreviewContainer: FC<LinkProps> = ({ link, onShare }) => {
  const handleThreeDotsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onShare(link.url);
  };

  const Icon = link.icon;

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(link.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mb-4 relative w-full max-w-[600px]"> {/* Added fixed width */}
      <LinkPreview url={link.url} className="w-full">
        <LinkContainer onClick={handleLinkClick} className="w-full">
          <div className="flex items-center space-x-3 flex-1"> {/* Added flex container */}
            <IconContext.Provider value={{ size: '24px', className: 'icon flex-shrink-0' }}>
              <Icon size={24} />
            </IconContext.Provider>
            <span className="font-bold truncate">{link.title}</span>
          </div>
          
          <ThreeDotsButton
            onClick={handleThreeDotsClick}
            className="p-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors ml-2 flex-shrink-0"
            aria-label={`Share ${link.title}`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-current"
            >
              <circle cy="12" cx="12" r="2" fill="currentColor" />
              <circle cy="19" cx="12" r="2" fill="currentColor" />
              <circle cy="5" cx="12" r="2" fill="currentColor" />
            </svg>
          </ThreeDotsButton>
        </LinkContainer>
      </LinkPreview>
    </div>
  );
};

export default LinkPreviewContainer;

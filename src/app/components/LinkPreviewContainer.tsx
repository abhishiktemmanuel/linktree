'use client';

import { FC } from 'react';
import { LinkContainer, Icon, ThreeDotsButton } from '../styles/sharedStyles';
import { LinkPreview } from './ui/link-preview';

interface LinkProps {
  link: {
    title: string;
    url: string;
    icon: string;
  };
  onShare: (url: string) => void;
}

const LinkPreviewContainer: FC<LinkProps> = ({ link, onShare }) => {
  const handleThreeDotsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onShare(link.url);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(link.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mb-4 relative">
      <LinkPreview url={link.url} className="w-full">
        <LinkContainer onClick={handleLinkClick}>
          <div>
            <Icon 
              icon={link.icon} 
              className="w-6 h-6"
            />
            <span className="font-bold truncate">{link.title}</span>
          </div>
          
          <ThreeDotsButton
            onClick={handleThreeDotsClick}
            className="p-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors ml-2"
            aria-label={`Share ${link.title}`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-current" // This will inherit the text color
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

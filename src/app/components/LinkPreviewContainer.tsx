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
  return (
    <LinkPreview 
              url={link.url}
              className="w-full"
            >
    <LinkContainer onClick={() => window.open(link.url, '_blank')}>
      <Icon icon={link.icon} />
      <span>{link.title}</span>
      <ThreeDotsButton onClick={(e) => { e.stopPropagation(); onShare(link.url); }}>
        &#x22EE;
      </ThreeDotsButton>
    </LinkContainer>
    </LinkPreview>
  );
};

export default LinkPreviewContainer;

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
    e.stopPropagation(); // Prevent the click from propagating to the LinkContainer or LinkPreview
    onShare(link.url);
  };

  return (
    <LinkPreview url={link.url} className="w-full">
      <LinkContainer
        onClick={() => window.open(link.url, '_blank')}
        style={{ position: 'relative' }} // Ensure proper positioning if needed
      >
        <Icon icon={link.icon} />
        <span>{link.title}</span>
        <ThreeDotsButton
          onClick={handleThreeDotsClick}
          style={{
            position: 'absolute', // Optional: Ensures it's independent of overlapping elements
            right: '10px', // Adjust based on your layout
          }}
        >
          &#x22EE;
        </ThreeDotsButton>
      </LinkContainer>
    </LinkPreview>
  );
};

export default LinkPreviewContainer;

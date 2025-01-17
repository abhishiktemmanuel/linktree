import { FC } from 'react';
import { Card, CardBody, CardHeader, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  TelegramIcon
} from 'react-share';

interface ShareCardProps {
  url: string;
  title?: string;
  className?: string;
}

const ShareCard: FC<ShareCardProps> = ({ url, title = '', className = '' }) => {
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <Card 
      className={`max-w-md backdrop-blur-sm bg-white/10 dark:bg-black/10 ${className}`}
      shadow="lg"
    >
      <CardHeader className="px-6 flex justify-between border-b border-gray-100/20 dark:border-gray-800/20">
        <h2 className="text-xl pr-4 font-bold text-white">
          Share {title}
        </h2>
        <Button
          isIconOnly
          variant="ghost"
          onClick={handleCopyLink}
          aria-label="Copy Link"
          className="hover:bg-gray-100/20  dark:hover:bg-gray-800/20"
        >
          <FontAwesomeIcon icon={faClipboard} className="text-gray-600 dark:text-gray-300" />
        </Button>
      </CardHeader>
      
      <CardBody className="p-6">
        <div className="grid grid-cols-5 gap-6">
          <FacebookShareButton url={url} title={title}>
            <div className="transform transition-all hover:scale-110 hover:-translate-y-1">
              <FacebookIcon size={48} round className="drop-shadow-lg" />
            </div>
          </FacebookShareButton>

          <TwitterShareButton url={url} title={title}>
            <div className="transform transition-all hover:scale-110 hover:-translate-y-1">
              <TwitterIcon size={48} round className="drop-shadow-lg" />
            </div>
          </TwitterShareButton>

          <WhatsappShareButton url={url} title={title}>
            <div className="transform transition-all hover:scale-110 hover:-translate-y-1">
              <WhatsappIcon size={48} round className="drop-shadow-lg" />
            </div>
          </WhatsappShareButton>

          <LinkedinShareButton url={url} summary={title}>
            <div className="transform transition-all hover:scale-110 hover:-translate-y-1">
              <LinkedinIcon size={48} round className="drop-shadow-lg" />
            </div>
          </LinkedinShareButton>

          <TelegramShareButton url={url} title={title}>
            <div className="transform transition-all hover:scale-110 hover:-translate-y-1">
              <TelegramIcon size={48} round className="drop-shadow-lg" />
            </div>
          </TelegramShareButton>
        </div>
      </CardBody>
    </Card>
  );
};

export default ShareCard;

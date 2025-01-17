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
    <Card className={`max-w-md ${className}`}>
      <CardHeader className="flex justify-between">
        <h2 className="text-xl font-semibold">Share this link</h2>
        <Button
          isIconOnly
          variant="light"
          onClick={handleCopyLink}
          aria-label="Copy Link"
        >
          <FontAwesomeIcon icon={faClipboard} />
        </Button>
      </CardHeader>
      
      <CardBody>
        <div className="grid grid-cols-5 gap-4">
          <FacebookShareButton url={url} title={title}>
            <FacebookIcon size={48} round className="hover:opacity-80 transition-opacity" />
          </FacebookShareButton>

          <TwitterShareButton url={url} title={title}>
            <TwitterIcon size={48} round className="hover:opacity-80 transition-opacity" />
          </TwitterShareButton>

          <WhatsappShareButton url={url} title={title}>
            <WhatsappIcon size={48} round className="hover:opacity-80 transition-opacity" />
          </WhatsappShareButton>

          <LinkedinShareButton url={url} summary={title}>
            <LinkedinIcon size={48} round className="hover:opacity-80 transition-opacity" />
          </LinkedinShareButton>

          <TelegramShareButton url={url} title={title}>
            <TelegramIcon size={48} round className="hover:opacity-80 transition-opacity" />
          </TelegramShareButton>
        </div>
      </CardBody>
    </Card>
  );
};

export default ShareCard;

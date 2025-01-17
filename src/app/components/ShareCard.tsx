import { FC } from 'react';
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
    <div className={`bg-white rounded-lg p-6 shadow-md ${className}`}>
      <div className="flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Share this link</h2>
          <button
            onClick={handleCopyLink}
            className="rounded-full p-3 hover:bg-gray-100"
            title="Copy Link"
          >

      <FontAwesomeIcon icon={faClipboard} />

          </button>
        </div>

        {/* Share Buttons Grid */}
        <div className="grid grid-cols-5 gap-4">
          <FacebookShareButton url={url} title={title}>
            <FacebookIcon size={48} round />
          </FacebookShareButton>

          <TwitterShareButton url={url} title={title}>
            <TwitterIcon size={48} round />
          </TwitterShareButton>

          <WhatsappShareButton url={url} title={title}>
            <WhatsappIcon size={48} round />
          </WhatsappShareButton>

          <LinkedinShareButton url={url} summary={title}>
            <LinkedinIcon size={48} round />
          </LinkedinShareButton>

          <TelegramShareButton url={url} title={title}>
            <TelegramIcon size={48} round />
          </TelegramShareButton>
        </div>
      </div>
    </div>
  );
};

export default ShareCard;

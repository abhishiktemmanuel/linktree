import { FC } from 'react';
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
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <div className={`bg-white rounded-lg p-6 shadow-md ${className}`}>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Share link</h2>
          <button 
            onClick={() => handleCopyLink()}
            className="rounded-full p-3 hover:bg-gray-100"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </button>
        </div>
        
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
          
          <LinkedinShareButton url={url}>
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

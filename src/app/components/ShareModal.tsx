import { FC } from 'react';
import { ShareOverlay, ShareCardWrapper, CloseButton } from '../styles/sharedStyles';

interface ShareModalProps {
  url: string;
  title: string;
  onClose: () => void;
}

const ShareModal: FC<ShareModalProps> = ({ url, title, onClose }) => {
  return (
    <ShareOverlay
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <ShareCardWrapper
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '20px',
          width: '400px',
          maxWidth: '90%',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          position: 'relative',
        }}
      >
        <CloseButton
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            fontSize: '24px',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
          }}
        >
          &times;
        </CloseButton>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Share {title}</h2>
        <p style={{ marginBottom: '20px', wordBreak: 'break-all' }}>{url}</p>
      </ShareCardWrapper>
    </ShareOverlay>
  );
};

export default ShareModal;

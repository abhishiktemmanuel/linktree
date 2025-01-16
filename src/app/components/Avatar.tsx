import { FC, useState } from 'react';
import Image from 'next/image';
import { AvatarWrapper, FallbackAvatar } from '../styles/sharedStyles';

interface AvatarProps {
  name: string;
  avatarUrl: string;
}

const Avatar: FC<AvatarProps> = ({ name, avatarUrl }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <AvatarWrapper>
      {!imageError ? (
        <Image
          src={avatarUrl}
          alt={name}
          width={96}
          height={96}
          onError={() => setImageError(true)}
          style={{ borderRadius: '50%', objectFit: 'cover' }}
          priority
        />
      ) : (
        <FallbackAvatar>{name.charAt(0).toUpperCase()}</FallbackAvatar>
      )}
    </AvatarWrapper>
  );
};

export default Avatar;

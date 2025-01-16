// pages/LinkPage.tsx
'use client';
import { FC } from 'react';
import Head from 'next/head';
import { ProfileSection } from '../components/ProfileSection';
import { LinksList } from '../components/LinksList';
import { ShareModal } from '../components/ShareModal';
import { useProfile } from '../hooks/useProfile';
import { useShare } from '../hooks/useShare';
import { Container, Content, FadeInContent } from './styles';

const LinkPage: FC = () => {
  const { profile, isLoading, profileLoaded } = useProfile();
  const { shareData, handleShareClick, closeShareCard } = useShare();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Container>
      <Head>
        <title>{profile.name} | Linktree</title>
      </Head>
      <FadeInContent $isVisible={profileLoaded}>
        <Content>
          <ProfileSection profile={profile} />
          <LinksList 
            links={profile.links} 
            onShareClick={handleShareClick} 
          />
          <ShareModal 
            isOpen={shareData.isOpen}
            url={shareData.url}
            title={profile.name}
            onClose={closeShareCard}
          />
        </Content>
      </FadeInContent>
    </Container>
  );
};

'use client';

import { FC, useState, useEffect } from 'react';
import Head from 'next/head';
import { Container, Content, FadeInContent, LoadingWrapper, LoadingSpinner } from '../styles/sharedStyles';
import Avatar from './Avatar';
import LinkPreviewContainer from './LinkPreviewContainer';
import ShareCard from './ShareCard';
import { ProfileData } from '../types/profile';


const LinkPage: FC = () => {
  const [shareData, setShareData] = useState<{ isOpen: boolean; url: string }>({ isOpen: false, url: '' });
  const [isLoading, setIsLoading] = useState(true);
  const [profileLoaded, setProfileLoaded] = useState(false);

  const profile: ProfileData = {
    name: 'Abhishikt Emmanuel Prakash',
    description: 'Code 🧑🏻‍💻 | Design 🎨 | Finance 📈',
    avatar: 'https://res.cloudinary.com/dy1vd3zpf/image/upload/c_fill,g_face,w_192,h_192,q_auto/v1737030431/deepikaabhiprakash02_gmail.com_Photograph_evhgfu.jpg',
    links: [
      { title: 'Portfolio', url: 'http://www.abhishikt.com', icon: '/icons/mood-happy.svg' },
      { title: 'GitHub', url: 'https://github.com/username', icon: '/icons/brand-github.svg' },
      { title: 'LinkedIn', url: 'https://linkedin.com/in/abhishikt-emmanuel-prakash-651a43174', icon: '/icons/code.svg' },
    ],
  };

  useEffect(() => {
    const loadImage = new Image();
    loadImage.src = profile.avatar;
    loadImage.onload = () => {
      setIsLoading(false);
      setProfileLoaded(true);
    };
    loadImage.onerror = () => {
      setIsLoading(false);
      setProfileLoaded(false);
    };
  }, [profile.avatar]);

  const handleShareClick = (url: string) => setShareData({ isOpen: true, url });
  const closeShareModal = () => setShareData({ isOpen: false, url: '' });

  if (isLoading) {
    return (
      <LoadingWrapper>
        <LoadingSpinner />
      </LoadingWrapper>
    );
  }

  return (
    <Container>
      <Head>
        <title>{profile.name} | Linktree</title>
      </Head>
      <FadeInContent $isVisible={profileLoaded}>
        <Content>
          <Avatar name={profile.name} avatarUrl={profile.avatar} />
          <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
          <p className="text-lg mb-6">{profile.description}</p>
          {profile.links.map((link, index) => (
            <LinkPreviewContainer key={index} link={link} onShare={handleShareClick} />
          ))}
          {shareData.isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="relative w-full max-w-md">
                <button 
                  onClick={closeShareModal}
                  className="absolute -top-10 right-0 text-white hover:text-gray-300"
                  aria-label="Close share dialog"
                >
                  ✕
                </button>
                <ShareCard 
                  url={shareData.url} 
                  title={`Check out ${profile.name}'s link`}
                  className="w-full"
                />
              </div>
            </div>
          )}
        </Content>
      </FadeInContent>
    </Container>
  );
};

export default LinkPage;












// const LinkPage: FC = () => {
//   const [shareData, setShareData] = useState<{ isOpen: boolean; url: string }>({
//     isOpen: false,
//     url: ''
//   });
//   const [isLoading, setIsLoading] = useState(true);
//   const [profileLoaded, setProfileLoaded] = useState(false);
//   const [profile, setProfile] = useState<ProfileData | null>(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await fetch('/api/profile');
//         const data = await response.json();
//         setProfile(data);
        
//         // Load avatar image
//         const loadImage = new Image();
//         loadImage.src = data.avatar;
//         loadImage.onload = () => {
//           setIsLoading(false);
//           setProfileLoaded(true);
//         };
//         loadImage.onerror = () => {
//           setIsLoading(false);
//           setProfileLoaded(false);
//         };
//       } catch (error) {
//         console.error('Failed to fetch profile:', error);
//         setIsLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleShareClick = (url: string) => setShareData({ isOpen: true, url });
//   const closeShareModal = () => setShareData({ isOpen: false, url: '' });

//   if (isLoading || !profile) {
//     return (
//       <LoadingWrapper>
//         <LoadingSpinner />
//       </LoadingWrapper>
//     );
//   }

//   return (
//     <Container>
//       <Head>
//         <title>{profile.name} | Linktree</title>
//       </Head>
//       <FadeInContent $isVisible={profileLoaded}>
//         <Content>
//           <Avatar name={profile.name} avatarUrl={profile.avatar} />
//           <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
//           <p className="text-lg mb-6">{profile.description}</p>
//           {profile.links.map((link, index) => (
//             <LinkPreviewContainer key={index} link={link} onShare={handleShareClick} />
//           ))}
//           {shareData.isOpen && (
//             <ShareModal url={shareData.url} title={profile.name} onClose={closeShareModal} />
//           )}
//         </Content>
//       </FadeInContent>
//     </Container>
//   );
// };

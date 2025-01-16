// 'use client';

// import { FC, useState, useEffect } from 'react';
// import Head from 'next/head';
// import { Container, Content, FadeInContent, LoadingWrapper, LoadingSpinner } from '../styles/sharedStyles';
// import Avatar from './Avatar';
// import LinkPreviewContainer from './LinkPreviewContainer';
// import ShareCard from './ShareCard';
// import { ProfileData } from '../types/profile';

// const LinkPage: FC = () => {
//   const [shareData, setShareData] = useState<{ isOpen: boolean; url: string }>({ isOpen: false, url: '' });
//   const [isLoading, setIsLoading] = useState(true);
//   const [profileLoaded, setProfileLoaded] = useState(false);

//   const profile: ProfileData = {
//     name: 'Abhishikt Emmanuel Prakash',
//     description: 'Code 🧑🏻‍💻 | Design 🎨 | Finance 📈',
//     avatar: 'https://res.cloudinary.com/dy1vd3zpf/image/upload/c_fill,g_face,w_192,h_192,q_auto/v1737030431/deepikaabhiprakash02_gmail.com_Photograph_evhgfu.jpg',
//     links: [
//       { title: 'Portfolio', url: 'http://www.abhishikt.com', icon: '/icons/mood-happy.svg' },
//       { title: 'GitHub', url: 'https://github.com/username', icon: '/icons/brand-github.svg' },
//       { title: 'LinkedIn', url: 'https://linkedin.com/in/abhishikt-emmanuel-prakash-651a43174', icon: '/icons/code.svg' },
//     ],
//   };

//   useEffect(() => {
//     const loadImage = new Image();
//     loadImage.src = profile.avatar;
//     loadImage.onload = () => {
//       setIsLoading(false);
//       setProfileLoaded(true);
//     };
//     loadImage.onerror = () => {
//       setIsLoading(false);
//       setProfileLoaded(false);
//     };
//   }, [profile.avatar]);

//   const handleShareClick = (url: string) => setShareData({ isOpen: true, url });
//   const closeShareModal = () => setShareData({ isOpen: false, url: '' });

//   if (isLoading) {
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
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//               <div className="relative w-full max-w-md">
//                 <button 
//                   onClick={closeShareModal}
//                   className="absolute -top-10 right-0 text-white hover:text-gray-300"
//                   aria-label="Close share dialog"
//                 >
//                   ✕
//                 </button>
//                 <ShareCard 'use client';
// import { FC, useState, Suspense, useEffect } from 'react';
// import Head from 'next/head';
// import styled from 'styled-components';
// import { LinkPreview } from './ui/link-preview';
// import ShareCard from './ShareCard';     
// import Image from 'next/image';       

// interface ProfileData {
//   name: string;
//   description: string;
//   avatar: string;
//   links: Array<{
//     title: string;
//     url: string;
//     icon: string;
//   }>;
// }

// const Container = styled.div`
//   min-height: 100vh;
//   width: 100%;
// `;

// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 64px 16px 32px;
//   max-width: 580px;
//   margin: 0 auto;
//   height: 100%;
//   position: relative;
// `;

// const LoadingWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   background: #f5f5f5;
// `;

// const LoadingSpinner = styled.div`
//   width: 50px;
//   height: 50px;
//   border: 3px solid #f3f3f3;
//   border-top: 3px solid #3498db;
//   border-radius: 50%;
//   animation: spin 1s linear infinite;
  
//   @keyframes spin {
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
//   }
// `;

// const FadeInContent = styled.div<{ $isVisible: boolean }>`
//   opacity: ${props => props.$isVisible ? 1 : 0};
//   transition: opacity 0.3s ease-in;
// `;
// const AvatarWrapper = styled.div`
//   width: 96px;
//   height: 96px;
//   position: relative;
//   margin-bottom: 16px;
//   border-radius: 50%;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const FallbackAvatar = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 2rem;
//   color: #666;
//   background-color: #f0f0f0;
// `;

// const LinkContainer = styled.div`
//   display: flex;
//   align-items: center;
//   min-height: 64px;
//   padding: 16px 66px;
//   margin: 8px 0;
//   border: 2px solid #ffffff;
//   border-radius: 30px;
//   color: #ffffff;
//   cursor: pointer;
//   transition: all 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99);
//   position: relative;
  
//   &:hover {
//     background-color: #ffffff;
//     color: #080F45;
//   }
// `;

// const ThreeDotsButton = styled.button`
//   position: absolute;
//   right: 16px;
//   background: none;
//   border: none;
//   color: currentColor;
//   font-size: 24px;
//   padding: 8px;
//   cursor: pointer;
//   transition: background-color 0.2s;
//   border-radius: 50%;
  
//   &:hover {
//     background-color: rgba(255, 255, 255, 0.1);
//   }
// `;

// const ShareOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: rgba(0, 0, 0, 0.7);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 1000;
// `;

// const ShareCardWrapper = styled.div`
//   position: relative;
//   width: 90%;
//   max-width: 500px;
//   background: white;
//   border-radius: 16px;
//   padding: 24px;
//   animation: slideUp 0.3s ease-out;
  
//   @keyframes slideUp {
//     from {
//       transform: translateY(50px);
//       opacity: 0;
//     }
//     to {
//       transform: translateY(0);
//       opacity: 1;
//     }
//   }
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 16px;
//   right: 16px;
//   background: none;
//   border: none;
//   font-size: 24px;
//   cursor: pointer;
//   color: #333;
//   padding: 8px;
//   border-radius: 50%;
  
//   &:hover {
//     background-color: rgba(0, 0, 0, 0.1);
//   }
// `;

// const Icon = styled.div<{icon: string}>`
//   position: absolute;
//   left: 8px;
//   top: 50%;
//   transform: translateY(-50%);
//   width: 32px;
//   height: 32px;
//   background-color: currentColor;
//   mask-image: url(${props => props.icon});
//   mask-size: 100%;
//   border-radius: 50%;
// `;

// const Title = styled.span`
//   font-bold;
//   background-clip: text;
//   -webkit-background-clip: text;
//   color: transparent;
//   background-image: linear-gradient(to bottom right, #A855F7, #EC4899);
// `;

// const LinkPage: FC = () => {
//   const [shareData, setShareData] = useState<{ isOpen: boolean; url: string }>({
//     isOpen: false,
//     url: ''
//   });
//   const [imageError, setImageError] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [profileLoaded, setProfileLoaded] = useState(false);

//   const profile: ProfileData = {
//     name: "Abhishikt Emmanuel Prakash",
//     description: "Code 🧑🏻‍💻 | Design 🎨 | Finance 📈",
//     avatar: "https://res.cloudinary.com/dy1vd3zpf/image/upload/c_fill,g_face,w_192,h_192,q_auto/v1737030431/deepikaabhiprakash02_gmail.com_Photograph_evhgfu.jpg",
//     links: [
//       {
//         title: "Portfolio",
//         url: "http://www.abhishikt.com",
//         icon: "/icons/mood-happy.svg"
//       },
//       {
//         title: "GitHub",
//         url: "https://github.com/username",
//         icon: "/icons/brand-github.svg"
//       },
//       {
//         title: "LinkedIn",
//         url: "https://linkedin.com/in/abhishikt-emmanuel-prakash-651a43174",
//         icon: "/icons/code.svg"
//       }
//     ]
//   };

//   useEffect(() => {
//     const loadImage = async () => {
//       return new Promise((resolve, reject) => {
//         const img = document.createElement('img');
//         img.src = profile.avatar;
        
//         img.onload = () => {
//           setIsLoading(false);
//           setProfileLoaded(true);
//           resolve(true);
//         };
        
//         img.onerror = () => {
//           setImageError(true);
//           setIsLoading(false);
//           setProfileLoaded(true);
//           reject(new Error('Failed to load image'));
//         };
//       });
//     };

//     loadImage().catch((error) => {
//       console.error('Error loading image:', error);
//     });

//     // Cleanup function
//     return () => {
//       setIsLoading(true);
//       setProfileLoaded(false);
//       setImageError(false);
//     };
// }, [profile.avatar]);


//   const handleShareClick = (e: React.MouseEvent, url: string) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setShareData({ isOpen: true, url });
//   };

//   const closeShareCard = () => {
//     setShareData({ isOpen: false, url: '' });
//   };

//   const renderAvatar = () => {
//     if (imageError) {
//       return (
//         <FallbackAvatar>
//           {profile.name.charAt(0)}
//         </FallbackAvatar>
//       );
//     }

//     return (
//       <Suspense fallback={<LoadingSpinner />}>
//         <Image
//           src={profile.avatar}
//           alt={profile.name}
//           width={192}
//           height={192}
//           priority
//           onError={() => setImageError(true)}
//           style={{
//             borderRadius: '50%',
//             objectFit: 'cover',
//             opacity: profileLoaded ? 1 : 0,
//             transition: 'opacity 0.3s ease-in'
//           }}
//           sizes="96px"
//           quality={90}
//           placeholder="blur"
//           blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshGxsdIR0hHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
//         />
//       </Suspense>
//     );
//   };

//   if (isLoading) {
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

//       <FadeInContent $isVisible={profileLoaded}>        <Content>
//           <AvatarWrapper>
//             {renderAvatar()}
//           </AvatarWrapper>
          
//           <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
//           <p className="text-lg mb-6">{profile.description}</p>
          
//           {profile.links.map((link, index) => (
//             <LinkPreview 
//               key={index}
//               url={link.url}
//               className="w-full"
//             >
//               <LinkContainer>
//                 <Icon icon={link.icon} />
//                 <Title>{link.title}</Title>
//                 <ThreeDotsButton 
//                   onClick={(e) => handleShareClick(e, link.url)}
//                 >
//                   &#x22EE;
//                 </ThreeDotsButton>
//               </LinkContainer>
//             </LinkPreview>
//           ))}

//           {shareData.isOpen && (
//             <ShareOverlay onClick={closeShareCard}>
//               <ShareCardWrapper onClick={e => e.stopPropagation()}>
//                 <CloseButton onClick={closeShareCard}>&times;</CloseButton>
//                 <ShareCard 
//                   url={shareData.url}
//                   title={profile.name}
//                   onClose={closeShareCard}
//                 />
//               </ShareCardWrapper>
//             </ShareOverlay>
//           )}
//         </Content>
//       </FadeInContent>
//     </Container>
//   );
// };

// export default LinkPage;
//                   url={shareData.url} 
//                   title={`Check out ${profile.name}'s link`}
//                   className="w-full"
//                 />
//               </div>
//             </div>
//           )}
//         </Content>
//       </FadeInContent>
//     </Container>
//   );
// };

// export default LinkPage;












// // const LinkPage: FC = () => {
// //   const [shareData, setShareData] = useState<{ isOpen: boolean; url: string }>({
// //     isOpen: false,
// //     url: ''
// //   });
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [profileLoaded, setProfileLoaded] = useState(false);
// //   const [profile, setProfile] = useState<ProfileData | null>(null);

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       try {
// //         const response = await fetch('/api/profile');
// //         const data = await response.json();
// //         setProfile(data);
        
// //         // Load avatar image
// //         const loadImage = new Image();
// //         loadImage.src = data.avatar;
// //         loadImage.onload = () => {
// //           setIsLoading(false);
// //           setProfileLoaded(true);
// //         };
// //         loadImage.onerror = () => {
// //           setIsLoading(false);
// //           setProfileLoaded(false);
// //         };
// //       } catch (error) {
// //         console.error('Failed to fetch profile:', error);
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchProfile();
// //   }, []);

// //   const handleShareClick = (url: string) => setShareData({ isOpen: true, url });
// //   const closeShareModal = () => setShareData({ isOpen: false, url: '' });

// //   if (isLoading || !profile) {
// //     return (
// //       <LoadingWrapper>
// //         <LoadingSpinner />
// //       </LoadingWrapper>
// //     );
// //   }

// //   return (
// //     <Container>
// //       <Head>
// //         <title>{profile.name} | Linktree</title>
// //       </Head>
// //       <FadeInContent $isVisible={profileLoaded}>
// //         <Content>
// //           <Avatar name={profile.name} avatarUrl={profile.avatar} />
// //           <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
// //           <p className="text-lg mb-6">{profile.description}</p>
// //           {profile.links.map((link, index) => (
// //             <LinkPreviewContainer key={index} link={link} onShare={handleShareClick} />
// //           ))}
// //           {shareData.isOpen && (
// //             <ShareModal url={shareData.url} title={profile.name} onClose={closeShareModal} />
// //           )}
// //         </Content>
// //       </FadeInContent>
// //     </Container>
// //   );
// // };

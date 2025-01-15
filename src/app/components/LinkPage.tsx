'use client';
import Head from 'next/head';
import styled from 'styled-components';
import { FC } from 'react';

interface ProfileData {
  name: string;
  description: string;
  avatar: string;
  links: {
    title: string;
    url: string;
    icon: string;
  }[];
}

const Container = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  position: relative;
  background: linear-gradient(180deg, #080F45, #426a7f);
  color: #ffffff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 16px 32px;
  max-width: 580px;
  margin: 0 auto;
  height: 100%;
`;

const Avatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  margin-bottom: 16px;
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  min-height: 64px;
  padding: 16px 66px;
  margin: 8px 0;
  border: 2px solid #ffffff;
  border-radius: 30px;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99);
  position: relative;
  
  &:hover {
    background-color: #ffffff;
    color: #080F45;
  }
`;

const Icon = styled.div<{icon: string}>`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  background-color: currentColor;
  mask-image: url(${props => props.icon});
  mask-size: 100%;
  border-radius: 50%;
`;

const LinkPage: FC = () => {
  const profile: ProfileData = {
    name: "Abhishikt Emmanuel Prakash",
    description: "Code 🧑🏻‍💻 | Design 🎨 | Finance 📈",
    avatar: "https://ugc.production.linktr.ee/zKH5i7RMT7OOAkAn8loa_JbtxyXC06GmZ7m61",
    links: [
      {
        title: "Portfolio",
        url: "http://www.abhishikt.com",
        icon: "/icons/mood-happy.svg"
      },
      {
        title: "GitHub",
        url: "https://github.com/username",
        icon: "/icons/brand-github.svg"
      },
      {
        title: "LinkedIn",
        url: "https://linkedin.com/in/abhishikt-emmanuel-prakash-651a43174",
        icon: "/icons/code.svg"
      }
    ]
  };

  return (
    <Container>
      <Head>
        <title>{profile.name} | Linktree</title>
        <meta name="description" content={profile.description} />
        <meta property="og:title" content={`${profile.name} | Linktree`} />
        <meta property="og:description" content={profile.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <Content>
        <Avatar src={profile.avatar} alt={profile.name} />
        <h1>{profile.name}</h1>
        <p>{profile.description}</p>
        
        {profile.links.map((link, index) => (
          <LinkButton key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            <Icon icon={link.icon} />
            {link.title}
          </LinkButton>
        ))}
      </Content>
    </Container>
  );
};

export default LinkPage;

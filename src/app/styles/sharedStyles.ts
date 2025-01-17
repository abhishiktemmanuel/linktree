import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 16px 32px;
  max-width: 580px;
  margin: 0 auto;
  height: 100%;
  position: relative;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f5f5f5;
`;

export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const FadeInContent = styled.div<{ $isVisible: boolean }>`
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.3s ease-in;
`;
export const AvatarWrapper = styled.div`
  width: 96px;
  height: 96px;
  position: relative;
  margin-bottom: 16px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FallbackAvatar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #666;
  background-color: #f0f0f0;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 64px;
  padding: 16px 66px;
  margin: 8px 0;
  border: 2px solid #ffffff;
  border-radius: 30px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99);
  position: relative;
  
  &:hover {
    background-color: #ffffff;
    color: #080F45;
  }
`;

export const ThreeDotsButton = styled.button`
  position: absolute;
  right: 16px;
  background: none;
  border: none;
  color: currentColor;
  font-size: 24px;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 50%;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ShareOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;


export const Icon = styled.div<{icon: string}>`
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

export const Title = styled.span`
  font-bold;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(to bottom right, #A855F7, #EC4899);
`;

export const ProfileSection: FC<{ profile: ProfileData }> = ({ profile }) => {
    const { imageError } = useProfile();
    
    return (
      <>
        <AvatarWrapper>
          <Avatar 
            src={profile.avatar} 
            name={profile.name} 
            showFallback={imageError} 
          />
        </AvatarWrapper>
        <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
        <p className="text-lg mb-6">{profile.description}</p>
      </>
    );
  };
  
export const LinksList: FC<{ 
    links: ProfileData['links'], 
    onShareClick: (e: React.MouseEvent, url: string) => void 
  }> = ({ links, onShareClick }) => {
    return (
      <>
        {links.map((link, index) => (
          <LinkItem 
            key={index} 
            link={link} 
            onShareClick={onShareClick} 
          />
        ))}
      </>
    );
  };
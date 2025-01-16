export const useShare = () => {
    const [shareData, setShareData] = useState({ isOpen: false, url: '' });
  
    const handleShareClick = (e: React.MouseEvent, url: string) => {
      e.preventDefault();
      e.stopPropagation();
      setShareData({ isOpen: true, url });
    };
  
    const closeShareCard = () => {
      setShareData({ isOpen: false, url: '' });
    };
  
    return { shareData, handleShareClick, closeShareCard };
  };
  
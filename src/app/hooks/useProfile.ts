// hooks/useProfile.ts
export const useProfile = () => {
    const [imageError, setImageError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [profileLoaded, setProfileLoaded] = useState(false);
    
    const profile = {
      name: "Abhishikt Emmanuel Prakash",
      description: "Code 🧑🏻‍💻 | Design 🎨 | Finance 📈",
      avatar: "...",
      links: [...]
    };
  
    useEffect(() => {
      const loadImage = async () => {
        // Image loading logic
      };
  
      loadImage().catch(console.error);
      return () => {
        setIsLoading(true);
        setProfileLoaded(false);
        setImageError(false);
      };
    }, [profile.avatar]);
  
    return { profile, isLoading, profileLoaded, imageError };
  };
  
  
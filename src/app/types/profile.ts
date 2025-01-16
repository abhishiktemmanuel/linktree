export interface ProfileLink {
    title: string;
    url: string;
    icon: string;
  }
  
  export interface ProfileData {
    name: string;
    description: string;
    avatar: string;
    links: ProfileLink[];
  }
  
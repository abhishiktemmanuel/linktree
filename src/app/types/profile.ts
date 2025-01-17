import { IconType } from "react-icons";
export interface ProfileLink {
    title: string;
    url: string;
    icon: IconType; 
  }
  
  export interface ProfileData {
    name: string;
    description: string;
    avatar: string;
    links: ProfileLink[];
  }
  
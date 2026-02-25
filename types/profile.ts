export interface Profile {
  name: string;
  role: string;
  institution: string;
  bio: string;
  skills: string[];
  interests: string[];
  contacts: {
    email: string;
    linkedin: string;
    github: string;
  };
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
  repoUrl?: string;
  tags: string[];
}

export interface NewsArticle {
  id: number;
  date: string;
  title: string;
  content: string;
}

export enum Section {
  ABOUT = 'About',
  PROJECTS = 'Projects',
  NEWS = 'News',
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  categories: string[];
  readTime: number;
} 
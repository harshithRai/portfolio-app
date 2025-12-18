export type Project = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  stack: string[];
  images: { src: string; alt: string }[];
  links?: { label: string; href: string }[];
};

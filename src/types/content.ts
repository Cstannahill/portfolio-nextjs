import { ReactNode } from 'react';

export type ContentImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  key?: string;
};

export type Experience = {
  company: string;
  timeframe: any;
  role: any;
  achievements: Array<{ description?: string; key?: string } | string>;
  images: ContentImage[];
  key?: string;
};

export type Institution = {
  name: string;
  description: ReactNode;
  key?: string;
};

export type Skill = {
  title: string;
  description: ReactNode;
  images?: ContentImage[];
  key?: string;
};
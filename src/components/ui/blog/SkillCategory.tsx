'use client';

import { ReactNode } from "react";

interface SkillCategoryProps {
  title: string;
  emoji: string;
  children: ReactNode;
}

export function SkillCategory({ title, emoji, children }: SkillCategoryProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">
        <span className="mr-2">{emoji}</span>
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );
}
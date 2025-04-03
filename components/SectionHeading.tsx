import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-medium capitalize mb-8 border-b-2 border-zinc-300 dark:border-zinc-500  w-fit py-2">
        {children}
      </h2>
    </div>
  );
}

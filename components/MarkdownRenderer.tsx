"use client";

import React, { useEffect, useState } from "react";
import { remark } from "remark";
import html from "remark-html";

interface MarkdownRendererProps {
  markdown: string;
  className?: string; // Optional custom styling
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  markdown,
  className,
}) => {
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    const renderMarkdown = async () => {
      const processed = await remark().use(html).process(markdown);
      setHtmlContent(processed.toString());
    };

    renderMarkdown();
  }, [markdown]);

  return (
    <div
      className={`prose ${className || ""}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default MarkdownRenderer;

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import { Components } from "react-markdown";
import React from "react";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          code: CodeComponent,
          img: ImageComponent,
          pre: PreComponent,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

type CodeProps = {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const CodeComponent = ({
  inline,
  className,
  children,
  ...props
}: CodeProps) => {
  if (inline) {
    return (
      <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    );
  }

  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

const PreComponent: Components["pre"] = ({ children, ...props }) => {
  return (
    <pre className="bg-[#282c34] rounded-lg p-4 overflow-x-auto" {...props}>
      {children}
    </pre>
  );
};

const ImageComponent: Components["img"] = ({ node, ...props }) => (
  <img className="rounded-lg" {...props} alt={props.alt || ""} />
);

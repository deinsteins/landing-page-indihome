import React from "react";

interface ArticleLayoutProps {
  title: string;
  content: string;
  link?: string;
  isLink?: boolean;
  linkTitle?: string;
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  title,
  content,
  link,
  linkTitle,
  isLink = false,
}) => {
  return (
    <div className="flex flex-col w-1/2">
      <div className="w-1/2 p-4">
        <h1 className="text-xl font-bold text-gray-900">{title}</h1>
      </div>
      <div className="w-full p-4 text-justify">
        <p className="text-gray-700">{content}</p>
      </div>
      {isLink ? (
        <a className="text-blue-600 px-4 hover:underline" href={link}>
          {linkTitle}
        </a>
      ) : null}
    </div>
  );
};

export default ArticleLayout;

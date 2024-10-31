// components/atoms/Link.tsx
import React from 'react';

interface CustomLinkProps {
  content: string;
  href: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ content, href }) => {
  return (
    <a href={href}>
      {content}
    </a>
  );
};

export default CustomLink;
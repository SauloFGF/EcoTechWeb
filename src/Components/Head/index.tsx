import React, { useEffect } from 'react';

interface HeadProps {
  title: string;
  description?: string;
}

const Head: React.FC<HeadProps> = ({ title, description }) => {

  useEffect(() => {
    document.title = `${title} | Dogs`;
    document.querySelector("meta[name='description']")?.setAttribute('content', description || '');
  }, [title, description]);

  return (
    <>
    </>
  );
}

export default Head;

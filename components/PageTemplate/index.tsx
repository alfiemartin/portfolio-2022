import React from "react";

const PageTemplate: React.FC<{ title?: string }> = ({ title, children }) => {
  return (
    <section>
      {title && <h1>{title}</h1>}
      {children}
    </section>
  );
};

export default PageTemplate;

import React from "react";

const PageTemplate: React.FC<{ title?: string }> = ({ title, children }) => {
  return (
    <section>
      {title && <h1 className="hidden sm:block sm:mb-6 md:mb-8">{title}</h1>}
      {children}
    </section>
  );
};

export default PageTemplate;

import React from "react";

interface ComponentShowcaseProps {
  title: string;
  children: React.ReactNode;
}

const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({
  title,
  children,
}) => {
  return (
    <section style={{ margin: "2rem 0" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{title}</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {children}
      </div>
    </section>
  );
};

export default ComponentShowcase;

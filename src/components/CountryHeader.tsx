import React from "react";

export const CountryHeader: React.FC<{ total: number }> = ({ total }) => {
    return <h1>Countries Available (Total: {total})</h1>;
  };
  
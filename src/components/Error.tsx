import React from "react";

export const Error: React.FC<{ message: string }> = ({ message }) => {
    return <p className="text-red-600">Error: {message}</p>;
};
  
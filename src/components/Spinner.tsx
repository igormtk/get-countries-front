import React from "react";

export const Spinner: React.FC = () => {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="mb-4">Loading...</h1>
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  };
  
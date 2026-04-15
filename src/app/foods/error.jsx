"use client";

import React from "react";

const PageError = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-100 px-4">
      <div className="text-center max-w-md">
        {/* Big Error Code */}
        <h1 className="text-6xl font-extrabold text-red-500 animate-bounce">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-500">
          The page you are looking for might have been removed, renamed, or does
          not exist.
        </p>

        {/* Button */}
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 px-6 py-3 rounded-xl bg-red-500 text-white font-semibold shadow-md hover:bg-red-600 transition"
        >
          Go Home
        </button>

        {/* Small hint */}
        <p className="mt-4 text-xs text-gray-400">Error Code: Error</p>
      </div>
    </div>
  );
};

export default PageError;

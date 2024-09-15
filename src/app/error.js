"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="grid place-content-center gap-4 justify-items-center h-full">
      <p className="text-lg">Something went wrong!</p>
      <button
        className="bg-primary-btn text-sm font-bold px-4 py-2 text-fg-btn"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Refresh
      </button>
    </div>
  );
}

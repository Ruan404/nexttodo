"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        gap: "16px",
        justifyItems: "center",
        height: "100%"
      }}
    >
      <p style={{fontSize: "18px"}}>Something went wrong!</p>
      <button
        style={{
          appearance: "none",
          background: "var(--primary-btn-color)",
          color: "var(--button-text-color)",
          fontFamily: "inherit",
          fontWeight: "bold",
          fontSize: "14px",
          padding: "8px 16px",
          border: "none",
        }}
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

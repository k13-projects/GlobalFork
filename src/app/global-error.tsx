"use client";

/**
 * Top-level error boundary — catches errors thrown from RootLayout itself.
 * Must include its own <html> + <body> because the layout has failed.
 * Keep this minimal: no design tokens, no fonts, no JS dependencies that could
 * also be the thing that just broke.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ebe1d0",
          color: "#2f2c28",
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
          padding: "2rem",
        }}
      >
        <main
          role="main"
          style={{ maxWidth: "32rem", textAlign: "center" }}
          aria-labelledby="ge-title"
        >
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#a3443e",
              marginBottom: "0.75rem",
            }}
          >
            Something went wrong
          </p>
          <h1
            id="ge-title"
            style={{
              fontSize: "2rem",
              lineHeight: 1.15,
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              margin: "0 0 1rem",
            }}
          >
            The kitchen had a hiccup
          </h1>
          <p style={{ lineHeight: 1.6, opacity: 0.85, margin: "0 0 1.5rem" }}>
            A core part of the site failed to load. Reload the page to try
            again. If the problem persists, please email us.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.75rem 2.5rem",
              borderRadius: "999px",
              background: "#b86b3d",
              color: "#ebe1d0",
              border: 0,
              fontSize: "0.85rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Reload
          </button>
          {error.digest && (
            <p style={{ marginTop: "1.5rem", fontSize: "0.75rem", opacity: 0.7 }}>
              error id · {error.digest}
            </p>
          )}
        </main>
      </body>
    </html>
  );
}

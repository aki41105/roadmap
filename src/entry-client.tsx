import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App";
import { redirectLegacyHash } from "./app/legacyRedirects";

function start() {
  if (redirectLegacyHash()) {
    return;
  }

  const root = document.getElementById("root");
  if (!root) {
    throw new Error("Roadmap root element was not found.");
  }

  const app = (
    <StrictMode>
      <App pathname={window.location.pathname} />
    </StrictMode>
  );

  if (root.childElementCount > 0) {
    hydrateRoot(root, app, { identifierPrefix: "roadmap-" });
  } else {
    createRoot(root, { identifierPrefix: "roadmap-" }).render(app);
  }
}

start();


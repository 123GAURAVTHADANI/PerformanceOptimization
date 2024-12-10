import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Form from "./Form.jsx";
import Timer from "./Timer.jsx";
import { ErrorBoundary } from "react-error-boundary";
import fallbackRender from "./FallbackComponent.jsx";
import SampleMaterial from "./SampleMaterial.jsx";
import Parent from "./Parent.jsx";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary FallbackComponent={fallbackRender}>
    <Parent />
  </ErrorBoundary>
);

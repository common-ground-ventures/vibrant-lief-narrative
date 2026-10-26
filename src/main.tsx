import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { startNoOrphans } from "./lib/noOrphans";

createRoot(document.getElementById("root")!).render(<App />);
startNoOrphans();

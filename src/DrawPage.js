import React, { useRef } from "react";
import { Excalidraw } from "@excalidraw/excalidraw";

export default function DrawPage() {
  const excalidrawRef = useRef(null);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Excalidraw
        ref={excalidrawRef}
        initialData={{ elements: [], appState: {} }}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}
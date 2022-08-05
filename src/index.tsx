import * as React from "react";
import { createRoot } from 'react-dom/client';

import Card from "./Card";
import { CardResizeProvider } from "./CardResizeContext";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <CardResizeProvider>
        <Card
          name="first-card"
          headerText="First card title"
          contentText="First card content text."
          footerText="First card footer text."
        />
        <Card
          name="second-card"
          headerText="Second card title"
          contentText="Second card content text."
          footerText="Second card footer text."
        />
        <Card
          name="third-card"
          headerText="Third card title that keeps on going"
          contentText="Third card content text."
          footerText="Third card footer text."
        />
      </CardResizeProvider>
    </div>
  );
}

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

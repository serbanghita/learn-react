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
          icon={"https://wwwimages.stage.adobe.com/content/dam/acom/one-console/icons_rebrand/ps_appicon.svg"}
          name="first-card"
          headerText="First card title"
          priceText="First card content text."
          ctaText="Go!"
          footerText="footer text."
        />
        <Card
          name="second-card"
          headerText="Second card title"
          priceText="Second card content text. Second card content text."
          ctaText="Okay"
          footerText="Second card footer text."
        />
        <Card
          icon={"https://wwwimages.stage.adobe.com/content/dam/acom/one-console/icons_rebrand/cc_appicon.svg"}
          name="third-card"
          headerText="Third card title that keeps on going"
          priceText="Third card content text."
          ctaText="Okay"
          footerText="Third card footer text."
        />
      </CardResizeProvider>
    </div>
  );
}

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

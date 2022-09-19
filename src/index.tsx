import * as React from "react";
import { createRoot } from 'react-dom/client';
import MyComponent from "./MyComponent";

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<MyComponent name={"First title"} image={"https://picsum.photos/200"} />);

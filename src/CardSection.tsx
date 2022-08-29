import * as React from "react";
import {
  useContext,
  useLayoutEffect,
  useState, useCallback
} from "react";
import CardResizeContext from "./CardResizeContext";

export const cardSectionTypes = {
  HEADER: "header",
  CONTENT: "content",
  PRICE: "price",
  CTA: "cta",
  FOOTER: "footer"
};

export default function CardSection({ name, children }) {
  const [style, setStyle] = useState({});
  const { getMaxCardSectionSize, setCardSectionSize } = useContext(
      CardResizeContext
  );

  const nodeRef = useCallback(($node) => {
    console.log('nodeRef', $node);
    if ($node !== null) {
      const pTop = parseFloat(window.getComputedStyle($node).getPropertyValue('padding-top')) || 0;
      const pBottom = parseFloat(window.getComputedStyle($node).getPropertyValue('padding-bottom')) || 0;
      const height = $node.clientHeight;
      setCardSectionSize(height - pTop - pBottom, name);
    }
  }, []);

  useLayoutEffect(() => {
    const minHeight = getMaxCardSectionSize(name);
    if (!(minHeight > 0)) {
      return;
    }
    const cssInline = { minHeight };
    console.log(
        "useLayoutEffect(): cssInline",
      name,
        cssInline,
        minHeight
    );
    setStyle(cssInline);
  }, [name, getMaxCardSectionSize]);

  return (
      <div className={`section section-${name}`} ref={nodeRef} style={style}>
        {children}
      </div>
  );
}

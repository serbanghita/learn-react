import * as React from "react";
import {
  useRef,
  useContext,
  useEffect,
  useLayoutEffect,
  useState
} from "react";
import CardResizeContext from "./CardResizeContext";

export const cardSectionTypes = {
  HEADER: "header",
  CONTENT: "content",
  FOOTER: "footer"
};

export default function CardSection({ name, children }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});
  const { getMaxCardSectionSize, setCardSectionSize } = useContext(
      CardResizeContext
  );

  useEffect(() => {
    const domAttr = ref.current as unknown as HTMLElement;
    console.log("useEffect(): wrapperRef", name, domAttr.clientHeight);
    setCardSectionSize(domAttr.clientHeight, name);
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
      <div className={`section section-${name}`} ref={ref} style={style}>
        {children}
      </div>
  );
}

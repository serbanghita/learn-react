import * as React from "react";
import {createContext, useState} from "react";

export interface ICardResizeContext {
  setCardSectionSize: (height: number, name: string) => void;
  getMaxCardSectionSize: (name: string) => number;
}

const CardResizeContext = createContext({} as ICardResizeContext);
CardResizeContext.displayName = "CardResizeContext";

interface ICardSizeData {
  name: string;
  height: number;
}

export function CardResizeProvider({ children }) {
  const [cardSectionSizes, setCardSectionSizes] = useState([] as ICardSizeData[]);

  const setCardSectionSize = (height, name) => {
    setCardSectionSizes((prevState) => [...prevState, { height, name }]);
  };

  const getMaxCardSectionSize = (name) => {
    console.log("getMaxSectionSize", name, cardSectionSizes);
    return cardSectionSizes
    .filter((item) => item.name === name)
    .map((item) => item.height)
    .reduce((acc, val) => {
      return acc >= val ? acc : val;
    }, 0);
  };

  return (
    <CardResizeContext.Provider
      value={{ setCardSectionSize, getMaxCardSectionSize }}
    >
      {children}
    </CardResizeContext.Provider>
  );
}

export default CardResizeContext;

import * as React from 'react';
import CardSection, { cardSectionTypes } from "./CardSection";
import {ActionButton} from "@adobe/react-spectrum";

export default function Card(props) {
  return (
      <div className={`card card-${props.name}`}>
        <CardSection name={cardSectionTypes.HEADER}>
          {props.icon && <img src={props.icon} width={"48px"} />} {props.headerText}
        </CardSection>
        <CardSection name={cardSectionTypes.CONTENT}>
          <CardSection name={cardSectionTypes.PRICE}>
            {props.priceText}
          </CardSection>
          <CardSection name={cardSectionTypes.CTA}>
            <ActionButton type={"submit"}>{props.ctaText}</ActionButton>
          </CardSection>
        </CardSection>
        <CardSection name={cardSectionTypes.FOOTER}>
          {props.footerText}
        </CardSection>
      </div>
  );
}

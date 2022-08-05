import * as React from 'react';
import CardSection, { cardSectionTypes } from "./CardSection";

export default function Card(props) {
  return (
      <div className={`card card-${props.name}`}>
        <CardSection name={cardSectionTypes.HEADER}>
          {props.headerText}
        </CardSection>
        <CardSection name={cardSectionTypes.CONTENT}>
          {props.contentText}
        </CardSection>
        <CardSection name={cardSectionTypes.FOOTER}>
          {props.footerText}
        </CardSection>
      </div>
  );
}

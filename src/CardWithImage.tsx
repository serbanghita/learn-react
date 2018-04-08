import * as React from "react";
import {ICardProps} from "./CardSimple";

export default class CardWithImage extends React.Component<ICardProps, {}> {

  public render() {
    const cardData = this.props.cardData;
    return (
      <div className="card">
        <div className="card-image">
          <img src={cardData.imgSrc} className="img-responsive" />
        </div>
        <div className="card-header">
          <div className="card-title h5">{cardData.title}</div>
          <div className="card-subtitle text-gray">{cardData.subtitle}</div>
        </div>
        <div className="card-body">
          {cardData.body}
        </div>
        <div className="card-footer">
          <button className={`btn btn-primary ${!cardData.canPlay ? "disabled" : ""}`}>{cardData.btnLabel}</button>
        </div>
      </div>
    );
  }

}

import * as React from "react";

export interface ICard {
  imgSrc?: string;
  title: string;
  subtitle: string;
  body?: string;
  btnLabel: string;
  canPlay: boolean;
}

export interface ICardProps {
  cardData: ICard;
}

export default class CardSimple extends React.Component<ICardProps, {}> {

  public render() {
    const cardData = this.props.cardData;
    return (
      <div className="card">
        <div className="card-header">
          <div className="card-title h5">{cardData.title}</div>
          <div className="card-subtitle text-gray">{cardData.subtitle}</div>
        </div>
        <div className="card-footer">
          <button className={`btn btn-primary ${!cardData.canPlay ? "disabled" : ""}`}>{cardData.btnLabel}</button>
        </div>
      </div>
    );
  }

}

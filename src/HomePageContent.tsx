import * as React from "react";
import {default as CardSimple, ICard} from "./CardSimple";
import CardWithImage from "./CardWithImage";

export default class HomePageContent extends React.Component<{}, {}> {
  public render() {

    const tutorialCardsData: ICard[] = [
      { title: "Moving", subtitle: "Number 0", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: true },
      { title: "Avoiding", subtitle: "Number 1", btnLabel: "Play", imgSrc: "img/macos-sierra-2.jpg", canPlay: false },
      { title: "Switching", subtitle: "Number 2", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "Eating", subtitle: "Number 3", btnLabel: "Play", imgSrc: "img/osx-el-capitan-2.jpg", canPlay: false },
      { title: "Bomb", subtitle: "Number 4", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "Boomerang", subtitle: "Number 5", btnLabel: "Play", imgSrc: "img/osx-yosemite.jpg", canPlay: false },
      { title: "Enemies", subtitle: "Number 6", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false }
    ];

    const tutorialCards = tutorialCardsData.map((card: ICard, index: number) => {
      return (
        <div className="column col-3" key={index}>
          <CardSimple cardData={card} />
        </div>
      );
    });

    const numberCardsData: ICard[] = [
      { title: "Zero", subtitle: "Number 0", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "One", subtitle: "Number 1", btnLabel: "Play", imgSrc: "img/macos-sierra-2.jpg", canPlay: false },
      { title: "Two", subtitle: "Number 2", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "Three", subtitle: "Number 3", btnLabel: "Play", imgSrc: "img/osx-el-capitan-2.jpg", canPlay: false },
      { title: "Four", subtitle: "Number 4", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "Five", subtitle: "Number 5", btnLabel: "Play", imgSrc: "img/osx-yosemite.jpg", canPlay: false },
      { title: "Six", subtitle: "Number 6", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "Seven", subtitle: "Number 7", btnLabel: "Play", imgSrc: "img/osx-el-capitan-2.jpg", canPlay: false },
      { title: "Eight", subtitle: "Number 8", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "Nine", subtitle: "Number 9", btnLabel: "Play", imgSrc: "img/macos-sierra-2.jpg", canPlay: false },
      { title: "Ten", subtitle: "Number 10", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "Eleven", subtitle: "Number 11", btnLabel: "Play", imgSrc: "img/osx-el-capitan-2.jpg", canPlay: false }
    ];

    const numberCards = numberCardsData.map((card: ICard, index: number) => {
      return (
        <div className="column col-2" key={index}>
          <CardSimple cardData={card} />
        </div>
      );
    });

    const letterCardsData: ICard[] = [
      { title: "A", subtitle: "Letter A", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "B", subtitle: "Letter B", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "C", subtitle: "Letter C", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "D", subtitle: "Letter D", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "E", subtitle: "Letter E", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "F", subtitle: "Letter F", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "G", subtitle: "Letter G", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "H", subtitle: "Letter H", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "I", subtitle: "Letter I", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "J", subtitle: "Letter J", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "K", subtitle: "Letter K", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "L", subtitle: "Letter L", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "M", subtitle: "Letter M", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "N", subtitle: "Letter N", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "O", subtitle: "Letter O", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "P", subtitle: "Letter P", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "Q", subtitle: "Letter Q", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "R", subtitle: "Letter R", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "S", subtitle: "Letter S", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "T", subtitle: "Letter T", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "U", subtitle: "Letter U", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "V", subtitle: "Letter V", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "W", subtitle: "Letter W", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "X", subtitle: "Letter X", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "Y", subtitle: "Letter Y", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "Z", subtitle: "Letter Z", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
    ];

    const letterCards = letterCardsData.map((card: ICard, index: number) => {
      return (
        <div className="column col-2" key={index}>
          <CardSimple cardData={card} />
        </div>
      );
    });

    const scenarioCardsData: ICard[] = [
      {
        title: "I'm hungry!",
        subtitle: "Eat 1000 food",
        body: "Sed aliquet sit amet est a cursus. Nullam tempus quam augue, eget aliquet libero tempus quis!",
        btnLabel: "Play",
        imgSrc: "img/osx-el-capitan.jpg",
        canPlay: true
      },
      {
        title: "It's rush hour!",
        subtitle: "Get all cristals in 100 seconds",
        body: "Morbi iaculis nunc urna, a aliquet ipsum viverra ut!",
        btnLabel: "Play",
        imgSrc: "img/osx-el-capitan-2.jpg",
        canPlay: true
      },
    ];

    const scenarioCards = scenarioCardsData.map((card: ICard, index: number) => {
      return (
        <div className="column col-4" key={index}>
          <CardWithImage cardData={card} />
        </div>
      );
    });

    return (
      <div>
        <div className="divider text-center" data-content="Characters" />

        <div className="columns">
          <div className="column col-6">

            <div className="columns">
              <div className="column col-3">
                <figure className="avatar avatar-xl">
                  <img src="img/avatar-1.png" alt="..." />
                </figure>
              </div>
              <div className="column col-9">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel porta dolor.
                  Sed iaculis eros eu condimentum feugiat. Praesent suscipit, nulla vel iaculis varius,
                  velit justo rutrum sapien, sit amet ornare est purus sit amet eros. Proin a tortor tincidunt,
                  imperdiet eros vitae, vulputate risus. Sed aliquet sit amet est a cursus. Nullam tempus
                  quam augue, eget aliquet libero tempus quis. Nam enim nisl, eleifend at tortor vel,
                  facilisis elementum nulla. Sed tempor bibendum laoreet. Praesent facilisis porta ex,
                  quis lacinia nulla dapibus ut.
                </p>
              </div>
            </div>

          </div>
          <div className="column col-6">

            <div className="columns">
              <div className="column col-9">
                <p>
                  Phasellus suscipit lorem at augue venenatis dapibus. Sed non metus condimentum, mollis
                  ex a, egestas orci. Nullam justo ante, sodales ac metus ut, lobortis bibendum felis.
                  Vivamus fringilla mauris quam, eu tincidunt tellus congue vitae. Aliquam feugiat ante
                  sit amet nunc finibus venenatis. Fusce id justo mattis, tincidunt lectus eu, efficitur
                  lacus. Vestibulum et porttitor eros, et faucibus metus. Pellentesque sed nisl elit.
                  Maecenas lacinia ac mi nec egestas. Cras ut finibus lorem. Sed ultrices porta elementum.
                  Duis sed malesuada nisl, in hendrerit libero.
                </p>
              </div>
              <div className="column col-3">
                <figure className="avatar avatar-xl">
                  <img src="img/avatar-2.png" alt="..." />
                </figure>
              </div>

            </div>
          </div>
        </div>

        <div className="divider text-center" data-content="Story" />

        <p>Morbi iaculis nunc urna, a aliquet ipsum viverra ut. Phasellus eu massa nulla. Ut sit amet massa velit.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean
          fringilla lacus id nibh faucibus tincidunt. Aliquam sit amet lacus facilisis, iaculis nulla molestie,
          blandit urna. Maecenas quis leo ut dolor vehicula mollis.</p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer
          pretium gravida eleifend. Morbi at augue in tortor dapibus fermentum non a ante. Donec tempor hendrerit
          purus a hendrerit. Vivamus vitae efficitur mi. Sed pulvinar magna id turpis maximus fringilla.</p>
        <p>Phasellus lectus magna, mattis a consequat mollis, hendrerit laoreet nunc. Praesent dapibus mi a diam
          interdum, pretium pulvinar magna congue. In viverra ligula libero, sit amet euismod elit aliquet eget.</p>

        <div className="divider text-center" data-content="Tutorials" />

        <div className="columns cards">
          {tutorialCards}
        </div>

        <div className="divider text-center" data-content="Numbers" />

        <div className="columns cards">
          {numberCards}
        </div>

        <div className="divider text-center" data-content="Letters" />

        <div className="columns cards">
          {letterCards}
        </div>

        <div className="divider text-center" data-content="Scenarios" />

        <div className="columns cards">
          {scenarioCards}
        </div>
      </div>
    );
  }
}

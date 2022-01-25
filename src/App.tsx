import * as React from "react";

interface IAppState {
  carousel: {label: string, img: string, desc: string}[];
}

/**
 * [1,2,3,4] - initial itemsInOrder; first 2 items are always in view.
 *  ^ ^ - items 1 and 2 are in view
 * User clicks "right"
 * Slide by 1 item
 * [2,3,4,1] - new itemsInOrder
 *  ^ ^
 * User clicks "left"
 * [1,2,3,4] - new itemsInOrder
 *  ^ ^
 * Slide by 1 item
 */
export default class App extends React.Component<{}, IAppState> {

  private readonly carouselRef;
  private widthOfCarouselItem: number = 0;
  private position: number = 0;
  private direction: string = '';
  private defaultJump: number = 2; // Should be in config
  private jump: number = 2;
  private itemsInOrder: number[] = [];

  constructor(props) {
    super(props);

    this.state = {
      carousel: [
        { label: 'First (1)', img: 'https://picsum.photos/id/1/160/50', desc: 'This is the first description text in here.' },
        { label: 'Second (2)', img: 'https://picsum.photos/id/2/160/50', desc: 'This is the second description text in here.' },
        { label: 'Third (3)', img: 'https://picsum.photos/id/3/160/50', desc: 'This is the third description text in here.' },
        { label: 'Fourth (4)', img: 'https://picsum.photos/id/4/160/50', desc: 'This is the fourth description text in here.' },
        { label: 'Fifth (5)', img: 'https://picsum.photos/id/5/160/50', desc: 'This is the fifth description text in here.' }
      ]
    }

    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
    this.carouselRef = React.createRef();
    this.itemsInOrder = [...this.state.carousel.keys()];
  }

  componentDidMount() {
    this.widthOfCarouselItem = parseInt(this.carouselRef.current.firstElementChild.clientWidth, 10);
    this.carouselRef.current.addEventListener('transitionend', (e) => {
      console.log(e);
      // Check carousel and order.
      this.updateItemsInOrder();
      this.updateButtons();
    });
  }

  private updateItemsInOrder() {

    console.log(this.position, this.itemsInOrder);

    this.itemsInOrder.forEach((carouselItemIndex, order) => {
      (document.querySelector(`[data-carousel-item="${carouselItemIndex}"]`) as HTMLElement).style.order = (order + 1).toString();
    });

    this.carouselRef.current.classList.remove('slide-transition');
    this.carouselRef.current.style.transform = `translateX(0)`;
  }

  private updateButtons() {
    // Show/Hide control buttons.
    if (this.position === Math.ceil(this.itemsInOrder.length / 2)) {
      (document.querySelector('.carousel-wrap .carousel-go-right') as HTMLElement).classList.add('hidden');
      (document.querySelector('.carousel-wrap .carousel-go-left') as HTMLElement).classList.remove('hidden');
      return;
    }
    if (this.position === - Math.ceil(this.itemsInOrder.length / 2)) {
      (document.querySelector('.carousel-wrap .carousel-go-left') as HTMLElement).classList.add('hidden');
      (document.querySelector('.carousel-wrap .carousel-go-right') as HTMLElement).classList.remove('hidden');
      return;
    }
    if (this.position < 0) {
      (document.querySelector('.carousel-wrap .carousel-go-right') as HTMLElement).classList.remove('hidden');
    } else if (this.position === 0) {
      (document.querySelector('.carousel-wrap .carousel-go-left') as HTMLElement).classList.add('hidden');
      (document.querySelector('.carousel-wrap .carousel-go-right') as HTMLElement).classList.remove('hidden');
    } else if (this.position > 0) {
      (document.querySelector('.carousel-wrap .carousel-go-left') as HTMLElement).classList.remove('hidden');
    }
  }

  public goLeft() {
    if (this.itemsInOrder.length % this.defaultJump !== 0 && this.position === Math.floor(this.itemsInOrder.length / 2)) {
      console.log("The 'end', going backwards.");
      this.jump = this.defaultJump;
    }

    this.position -= this.jump;
    this.direction = 'left';

    // Remove last element(s), put them in front.
    const items = this.itemsInOrder.splice(-(this.jump), this.jump);
    this.itemsInOrder = items.concat(this.itemsInOrder)

    // this.updateItemsInOrder();
    // this.updateButtons();

    this.carouselRef.current.classList.add('slide-transition');
    this.carouselRef.current.style.transform = `translateX(${this.widthOfCarouselItem * this.jump}px)`;
  }

  public goRight() {
    // We have an odd number of items in the carousel.
    // We need to change the jump to 1, when we reach the "end".
    if (this.itemsInOrder.length % this.defaultJump !== 0 && this.position === Math.floor(this.itemsInOrder.length / 2)) {
      console.log("The 'end'");
      this.jump = 1;
    }

    this.position += this.jump;
    this.direction = 'right';

    // Remove first element(s), append them.
    const items = this.itemsInOrder.splice(0, this.jump);
    this.itemsInOrder = this.itemsInOrder.concat(items);

    // this.updateItemsInOrder();
    // this.updateButtons();

    this.carouselRef.current.classList.add('slide-transition');
    this.carouselRef.current.style.transform = `translateX(-${this.widthOfCarouselItem * this.jump}px)`;
  }

  public render() {

    console.log('render()');

    return (
        <div>
            <h1>App</h1>

          <div className="carousel-wrap">
            <div className="carousel-go carousel-go-left hidden" onClick={this.goLeft}>&laquo;</div>
            <div className="carousel-go carousel-go-right" onClick={this.goRight}>&raquo;</div>
            <div className="carousel-slider-wrap">
              <div className="carousel slide-transition" ref={this.carouselRef}>
                { this.state.carousel.map((carouselItem, index) => {
                  return (
                    <div className="carousel-item" data-carousel-item={index} key={index} style={{order: index + 1}}>
                      <img src={carouselItem.img} />
                      <h1>{carouselItem.label}</h1>
                      <p>{carouselItem.desc}</p>
                    </div>
                  )
                }) }
              </div>
            </div>
          </div>
        </div>
    );
  }
}

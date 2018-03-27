import * as React from "react";

interface ICurrencyConverterState {
  lei: number;
  usd: number;
}

interface ICurrencyInputProps {
  name: string;
  currency: string;
  value: number;
  changeHandler: (e) => any;
}

interface ICurrencyInputState {
  value: number;
}

class CurrencyInput extends React.Component<ICurrencyInputProps, ICurrencyInputState> {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
  }

  private changeHandler(e) {
    this.props.changeHandler(e.target.value);
  }

  render() {
    return (
      <div>
        <input type="text" name={this.props.name} value={this.props.value} onChange={this.changeHandler} />
        {this.props.currency.toUpperCase()}
      </div>
    );
  }
}

export default class CurrencyConverter extends React.Component<{}, ICurrencyConverterState> {
  private exchangeRate = {
    usd: { lei: 0.26694 },
    lei: { usd: 3.74616019 }
  };

  constructor(props) {
    super(props);
    this.state = { lei: 0, usd: 0 };
    this.convertLeiToUsd = this.convertLeiToUsd.bind(this);
    this.convertUsdToLei = this.convertUsdToLei.bind(this);
  }

  private round(number: number, precision: number) {
    let factor = Math.pow(10, precision);
    let tempNumber = number * factor;
    let roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
  };

  private convertLeiToUsd(lei: number) {
    this.setState({lei, usd: this.round(lei * this.exchangeRate.usd["lei"], 2)});
  }

  private convertUsdToLei(usd: number) {
    this.setState({usd, lei: this.round(usd * this.exchangeRate.lei["usd"], 2)});
  }

  public render() {
    return (
      <fieldset>
        <legend>Currency converter</legend>
        <div>
          <label>From: </label>
          <CurrencyInput name="from" currency="lei" value={this.state.lei} changeHandler={this.convertLeiToUsd} />
        </div>
        <div>
          <label>To: </label>
          <CurrencyInput name="to" currency="usd" value={this.state.usd} changeHandler={this.convertUsdToLei} />
        </div>
      </fieldset>
    );
  }
}

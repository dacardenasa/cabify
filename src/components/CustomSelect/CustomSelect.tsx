import React, { Component } from "react";
import CountriesList from '../CountriesList/CountriesList';
const styles = require('./CustomSelect.module.css');

class CustomSelect extends Component<any, any> {

  state: IcountryData = {
    prefix: 34,
    countries: [],
    showOptions: false,
  };

  async componentDidMount() {
    const url: string = "https://restcountries.eu/rest/v2/all";
    const response: any = await fetch(url);

    if (response.ok) {
      const countries: any [] = await response.json();
      const formatDataCountries: Array<{ name: string, callingCodes: string, flag: string }> = countries.reduce((accumulator, country) => {
        const { name, callingCodes, flag } = country;
        accumulator.push({ name, callingCodes, flag });
        return accumulator;
      }, []);

      this.setState({
        countries: [...this.state.countries, ...formatDataCountries],
      });
    } else {
      console.log(`HTTP-Error: ${response.status}`);
    }
  }

  onClickSelectHandler = (event: React.MouseEvent<HTMLElement> ) => {
    event.preventDefault();

    this.setState({
      showOptions: !this.state.showOptions
    });
  }

  onClickOptionHandler = ( prefix: string, country: string ) => {
    this.setState({
      prefix,
      country,
      showOptions: false,
    });
  }

  getPrefixCountry = ():string => {
    return (this.state.prefix).toString();
  }

  render() {
    return (
      <div className={ styles.prefixBoxStyles }>
        <label htmlFor="prefix" className={ styles.labelStyles }>
          Prefix:
        </label>
        <div onClick={ e => this.onClickSelectHandler(e) } className={ styles.selectBoxTagStyles }>
          <span className={ styles.defaultOptionTagStyles }>+{ this.state.prefix }</span>
          <i className={ styles.dropDownIconTagStyles + " fa fa-angle-up" } aria-hidden="true"></i>
        </div>
        <div className={ this.state.showOptions ? 'show ' + styles.listBoxtStyles : 'hide ' + styles.listBoxtStyles }>
          { this.state.countries.map((country) => {
            return(
              <CountriesList 
                name={ country.name }
                callingCode= { country.callingCodes }
                flag={ country.flag }
                onClickOptionHandler={ this.onClickOptionHandler.bind(this) }
              />
            )
          })}
        </div>
      </div>
    );
  }
}

interface IcountryData {
  prefix: number;
  countries: { name: string, callingCodes: string, flag: string }[];
  showOptions: boolean;
}

export default CustomSelect;

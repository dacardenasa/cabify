import React, { Component } from "react";
import CountriesList from '../CountriesList/CountriesList';
const styles = require('./CustomSelect.module.css');

interface IcountryData {
  prefix: number;
  countries: { name: string, callingCodes: string, flag: string }[];
  showOptions: boolean;
}
class CustomSelect extends Component<any, any> {

  state: IcountryData = {
    prefix: 34,
    countries: [],
    showOptions: false,
  };

  componentDidMount() {
    const fetchCountries = async () => {
      try {
        const url: string = "https://restcountries.com/v3.1/all";
        const response: any = await fetch(url);
        const countries: any [] = await response.json();
        const formatDataCountries: Array<{ name: { common: string }, flags: { png: string }, idd: { suffixes: string[] } }> = countries.reduce((accumulator, country) => {
          const { name: { common }, flags: { png }, idd: { suffixes } } = country;
          accumulator.push({ name: common, flag: png, callingCodes: suffixes });
          return accumulator;
        }, []);
        this.setState({
          countries: [...this.state.countries, ...formatDataCountries],
        });
      } catch(error) {
        console.log(`HTTP-Error: ${error}`);
      }
    }
    fetchCountries()
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
          {this.state.countries.map((country, index) => {
            return(
              <CountriesList
                key={`${index}-country`}
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

export default CustomSelect;

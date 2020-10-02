import React, { Component } from "react";
import styles from './CustomSelect.module.css';

class CustomSelect extends Component {
  constructor() {
    super();

    this.state = {
      prefix: 34,
      countries: [],
      showOptions: false,
    };
  }

  async componentDidMount() {
    const url = "https://restcountries.eu/rest/v2/all";
    const response = await fetch(url);

    if (response.ok) {
      const countries = await response.json();
      const formatDataCountries = countries.reduce((accumulator, country) => {
        const { name, callingCodes, flag } = country;
        accumulator.push({ name, callingCodes, flag });
        return accumulator;
      }, []);

      this.setState({
        countries: formatDataCountries,
      });
    } else {
      console.log(`HTTP-Error: ${response.status}`);
    }
  }

  onClickSelectHandler = (event) => {
    event.preventDefault();
    let booleanOptions;

    this.state.showOptions ? booleanOptions = false : booleanOptions = true; 

    this.setState({
      showOptions: booleanOptions
    });
  }

  onClickOptionHandler = ( prefix, country ) => {
    this.setState({
      prefix,
      country,
      showOptions: false,
    });
  }

  getPrefixCountry = () => {
    return this.state.prefix;
  }

  render() {
    return (
      <div className={ styles.prefixBoxStyles }>
        <label htmlFor="prefix" className={ styles.labelStyles }>
          Prefix:
        </label>
        <div onClick={ this.onClickSelectHandler } className={ styles.selectBoxTagStyles }>
          <span className={ styles.defaultOptionTagStyles }>+{ this.state.prefix }</span>
          <i className={ styles.dropDownIconTagStyles + " fa fa-angle-up" } aria-hidden="true"></i>
        </div>

        <div className={ this.state.showOptions ? 'show ' +styles.listBoxtStyles : 'hide ' + styles.listBoxtStyles }>
          {this.state.countries.map((country) => {
            return (
              <div
                className={ styles.countriesBoxStyles + " country-box"}
                key={ country.name }
                onClick={ () => this.onClickOptionHandler( country.callingCodes, country.name ) }
              >
                <div className="flag-box">
                  <img
                    className={ styles.flagImgTagStyles }
                    src={ country.flag }
                    alt={ country.name + " flag" }
                  />
                </div>
                <div className="name-box">
                  <p className={ styles.optionTagStyles }>
                    { country.name }
                  </p>
                </div>
                <div className="prefix-box">
                  <p className={ styles.optionTagStyles }>
                    { "+" + country.callingCodes }
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    );
  }
}

export default CustomSelect;

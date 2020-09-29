import React, { Component } from "react";

class CustomSelect extends Component {
  constructor() {
    super();

    this.state = {
      prefix: 34,
      countries: [],
      showOptions: false,
    };

    this.prefixBoxStyles = {
      display: "flex",
      flexFlow: "column wrap",
      width: "25%",
      borderBottom: "1px solid #ccc",
      paddingBottom: "5px",
      position: "relative",
    };

    this.labelStyles = {
      color: "#737379",
      fontSize: "12px",
    };

    this.listBoxtStyles = {
      width: "250px",
      height: "250px",
      overflow: "auto",
      backgroundColor: "#fff",
      position: "absolute",
      top: 45,
      border: "1px solid #ccc",
      borderRadius: "5px",
      boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
      padding: "5px 10px",
      zIndex: 1, 
    };

    this.countryBoxStyles = {
      parent: {
        width: "100%",
        height: "30px",
        display: "flex",
        justifyContent: "space-between",
        padding: "5px",
        transition: "all 300ms",
      },
      flagBox: {
        width: "20%",
      },
      nameBox: {
        width: "60%",
      },
      prefixBox: {
        width: "20%",
      },
    };
  }

  async componentDidMount() {
    const url = "https://restcountries.eu/rest/v2/all";
    const response = await fetch(url);

    if (response.ok) {
      let countries = await response.json();
      let formatDataCountries = countries.reduce((accumulator, country) => {
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
      <div className="prefix-box" style={this.prefixBoxStyles}>
        <label htmlFor="prefix" style={this.labelStyles}>
          Prefix:
        </label>
        <div onClick={ this.onClickSelectHandler } style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-between" }}>
          <span style={{ color: "rgb(63, 63, 68)" }}>+{ this.state.prefix }</span>
          <i className="fa fa-angle-up" aria-hidden="true" style={{ color: "rgb(159, 159, 162)" }}></i>
        </div>

        <div className={ this.state.showOptions ? 'show' : 'hide' } style={ this.listBoxtStyles } >
          {this.state.countries.map((country) => {
            return (
              <div
                className="country-box"
                key={country.name}
                style={this.countryBoxStyles.parent}
                onClick={ () => this.onClickOptionHandler( country.callingCodes, country.name ) }
              >
                <div className="flag-box">
                  <img
                    src={country.flag}
                    alt={country.name + " flag"}
                    style={{
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="name-box">
                  <p style={{ fontSize: "10px", color: "rgb(115, 115, 121)" }}>
                    {country.name}
                  </p>
                </div>
                <div className="prefix-box">
                  <p style={{ fontSize: "10px", color: "rgb(115, 115, 121)" }}>
                    {"+" + country.callingCodes}
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

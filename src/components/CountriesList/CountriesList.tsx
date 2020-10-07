import * as React from 'react';
const styles = require('./CountriesList.module.css');

class CountriesList extends React.Component <ICountriesListFromProps, any> {
  render(){
    return (
      <>
        <div
          className={ styles.countriesBoxStyles + " country-box"}
          key={ this.props.name }
          onClick={ () => this.props.onClickOptionHandler( this.props.callingCode, this.props.name ) }
          >
          <div className="flag-box">
            <img
              className={ styles.flagImgTagStyles }
              src={ this.props.flag }
              alt={ this.props.name + " flag" }
            />
          </div>
          <div className="name-box">
            <p className={ styles.optionTagStyles }>
              { this.props.name }
            </p>
          </div>
          <div className="prefix-box">
            <p className={ styles.optionTagStyles }>
              { "+" + this.props.callingCode }
            </p>
          </div>
        </div>
      </>
    )
  }
}

interface ICountriesListFromProps {
  name: string,
  callingCode: string,
  flag: string,
  onClickOptionHandler: ( callingCodes:string, name:string) => void,
}


export default CountriesList;
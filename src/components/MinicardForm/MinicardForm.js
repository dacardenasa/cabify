import React, { Component } from 'react';
import logo from '../../img/logo-alone-blue.png';
import styles from './MinicardForm.module.css';

class MinicardForm extends Component {
    
  state = {
    name: "",
    job: "",
    prefix: "",
    phone: "",
    email: "",
    website: "",
    address: ""
  }

  static getDerivedStateFromProps( props, state ) {

    if ( props.name !== state.name ) { return { name: props.name } };

    if ( props.job !== state.job ) { return { job: props.job } };

    if ( props.prefix !== state.prefix ) { return { prefix: props.prefix } };

    if ( props.phone !== state.phone ) { return { phone: props.phone } };

    if ( props.email !== state.email ) { return { email: props.email } };

    if ( props.website !== state.website ) { return { website: props.website } };

    if ( props.address !== state.address ) { return { address: props.address } };

    return null;
  }

  conponentDidUpdate( prevProps, prevState ) {

    if ( prevProps.name !== this.state.name ) {
      this.setState({
        name: prevProps.name
      });
    }

    if ( prevProps.job !== this.state.job ) {
      this.setState({
        job: prevProps.job
      });
    }

    if ( prevProps.prefix !== this.state.prefix ) {
      this.setState({
        prefix: prevProps.prefix
      });
    }

    if ( prevProps.phone !== this.state.phone ) {
      this.setState({
        phone: prevProps.phone
      });
    }

    if ( prevProps.email !== this.state.email ) {
      this.setState({
        email: prevProps.email
      });
    }

    if ( prevProps.website !== this.state.website ) {
      this.setState({
        website: prevProps.website
      });
    }

    if ( prevProps.address !== this.state.address ) {
      this.setState({
        address: prevProps.address
      });
    }

  }

  render(){
    return(
      <div className={ styles.miniCardFormStyles }>
  
        <div className={ styles.headerInfoStyles }>
          <h4 className={ styles.nameTagStyles }>
            { this.state.name.length > 0 ? this.state.name : "Laura Sanchez" }
          </h4>
          <h6 className={ styles.jobTagStyles }>
            { this.state.job.length > 0 ? this.state.job : "Frontend Developer" }
          </h6>
        </div>
  
        <div className="body-info" style={{ display: "flex", flexFlow: "column wrap" }}>
  
          <div className={ styles.boxStyles }>
            <i className={ styles.iconTagStyles + " fa fa-phone" } aria-hidden="true"></i>
            <h6 className={ styles.contentTagStyles }>
              +{ `${this.state.prefix.length > 0 ? this.state.prefix : "34"}` }
              { ` ${ this.state.phone.length > 0 ? this.state.phone : "3133466784" }`}
            </h6>
          </div>
  
          <div className={ styles.boxStyles }>
            <i className={ styles.iconTagStyles + " fa fa-envelope-o" } aria-hidden="true"></i>
            <h6 className={ styles.contentTagStyles }>
              { this.state.email.length > 0 ? this.state.email : "laurita009@outlook.es" }
            </h6>
          </div>
  
          <div className={ styles.boxStyles }>
            <i className={ styles.iconTagStyles + " fa fa-globe" } aria-hidden="true"></i>
            <h6 className={ styles.contentTagStyles }>
              { this.state.website.length > 0 ? this.state.website : "www.lautiraDeveloper.com" }
            </h6>
          </div>
  
          <div className={ styles.boxAddressLogoStyles }>
            <div className={ styles.addresBoxTagStyles }> 
              <i className={ styles.addressIconTagStyles + " fa fa-street-view" } aria-hidden="true"></i>
              <h6 className={ styles.addressContentTagStyles }>
                { this.state.address.length > 0 ? this.state.address : "Calle 11 No 5-87 Oeste, Madrid" }
              </h6>
            </div>
            <div className={ styles.boxLogoTagStyles }>
              <img src={logo} alt="log-cabify" className={ styles.imgTagStyles }/>
            </div>
          </div>
  
        </div>
  
      </div>
    );
  }

}

export default MinicardForm;

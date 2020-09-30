import React, { Component } from 'react';
import logo from '../../img/logo-alone-blue.png';
import styles from './Card.module.css';

class MinicardForm extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      name: this.props.name,
      job: this.props.job,
      prefix: this.props.prefix,
      phone: this.props.phone,
      email: this.props.email,
      website: this.props.website,
      address: this.props.address,
    }

  }

  componentWillReceiveProps(nextProps){
    if (this.props.name !== nextProps.name){
      this.setState({
        name: nextProps.name,
      });
    }

    if (this.props.job !== nextProps.job){
      this.setState({
        job: nextProps.job,
      });
    }

    if (this.props.prefix !== nextProps.prefix){
      this.setState({
        prefix: nextProps.prefix,
      });
    }

    if (this.props.phone !== nextProps.phone){
      this.setState({
        phone: nextProps.phone,
      });
    }

    if (this.props.email !== nextProps.email){
      this.setState({
        email: nextProps.email,
      });
    }

    if (this.props.website !== nextProps.website){
      this.setState({
        website: nextProps.website,
      });
    }

    if (this.props.address !== nextProps.address){
      this.setState({
        address: nextProps.address,
      });
    }
  }

  render(){
    return(
      <div className={ styles.miniCardFormStyles }>
  
        <div className={ styles.headerInfoStyles }>
          <h4 className={ styles.nameTagStyles }>{ this.state.name }</h4>
          <h6 className={ styles.jobTagStyles }>{ this.state.job }</h6>
        </div>
  
        <div className="body-info" style={{ display: "flex", flexFlow: "column wrap" }}>
  
          <div className={ styles.boxStyles }>
            <i className={ styles.iconTagStyles + " fa fa-phone" } aria-hidden="true"></i>
            <h6 className={ styles.contentTagStyles }>+{ `${this.state.prefix} ${this.state.phone}` }</h6>
          </div>
  
          <div className={ styles.boxStyles }>
            <i className={ styles.iconTagStyles + " fa fa-envelope-o" } aria-hidden="true"></i>
            <h6 className={ styles.contentTagStyles }>{ this.state.email }</h6>
          </div>
  
          <div className={ styles.boxStyles }>
            <i className={ styles.iconTagStyles + " fa fa-globe" } aria-hidden="true"></i>
            <h6 className={ styles.contentTagStyles }>{ this.state.website }</h6>
          </div>
  
          <div className={ styles.boxAddressLogoStyles }>
            <div className={ styles.addresBoxTagStyles }> 
              <i className={ styles.addressIconTagStyles + " fa fa-street-view" } aria-hidden="true"></i>
              <h6 className={ styles.addressContentTagStyles }>{ this.state.address }</h6>
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

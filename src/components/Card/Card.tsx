import React, { Component } from 'react';
import Minicard from '../Minicard/Minicard';
import MinicardForm from '../MinicardForm/MinicardForm';
import { IUserState } from '../IUserState';
const logoAlone = require('../../img/logo-alone.png');
const styles = require('./Card.module.css');

interface ICardProps {
  name: string,
  job: string,
  prefix: string,
  phone: string,
  email: string,
  website: string,
  address: string,
}

class Card extends Component<ICardProps, IUserState> {

  state:IUserState = {
    name: this.props.name,
    job: this.props.job,
    prefix: this.props.prefix,
    phone: this.props.phone,
    email: this.props.email,
    website: this.props.website,
    address: this.props.address,
  };

  static getDerivedStateFromProps( props: ICardProps, state: IUserState ) {
    if ( props.name !== state.name ) { return { name: props.name } };

    if ( props.job !== state.job ) { return { job: props.job } };

    if ( props.prefix !== state.prefix ) { return { prefix: props.prefix } };

    if ( props.phone !== state.phone ) { return { phone: props.phone } };

    if ( props.email !== state.email ) { return { email: props.email } };

    if ( props.website !== state.website ) { return { website: props.website } };

    if ( props.address !== state.address ) { return { address: props.address } };

    return null;
  }

  conponentDidUpdate( prevProps: ICardProps, prevState: IUserState ) {

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
      <div className={ styles.cardStyles }>
        <div className={ styles.labelStyles }>
          <img src={logoAlone} alt="logo-cabify" width="15px" height="15px" />
          <span style={{ fontSize: "12px" }}>Cabify</span>
        </div>
        <div className={ styles.titleCardStyles }>
          <h1 className={ styles.titleTagCardStyles }>Request your business card</h1>
        </div>
        <div className={ styles.minicardsBoxStyles } >
          <Minicard />
          <MinicardForm 
            name={ this.state.name }
            job={ this.state.job }
            prefix={ this.state.prefix }
            phone={ this.state.phone }
            email={ this.state.email }
            website={ this.state.website }
            address={ this.state.address }
          />
        </div>
      </div>
    );
  }
}

export default Card;
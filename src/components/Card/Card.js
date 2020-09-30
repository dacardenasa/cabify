import React, { Component } from 'react';
import Minicard from './Minicard';
import MinicardForm from './MinicardForm';
import logoAlone from '../../img/logo-alone.png';
import styles from './Card.module.css';

class Card extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: this.props.name || "Laura Sanchez",
      job: this.props.job || "Frontend Developer",
      prefix: this.props.prefix || "34",
      phone: this.props.phone || "3133466784",
      email: this.props.email || "laurita009@outlook.es",
      website: this.props.website || "www.lautiraDeveloper.com",
      address: this.props.address || "Calle 11 No 5-87 Oeste, Madrid"
    };
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
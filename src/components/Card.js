import React, { Component } from 'react';
import Minicard from './Minicard';
import MinicardForm from './MinicardForm';
import bgCard from '../img/bg-card.png';
import logoAlone from '../img/logo-alone.png';

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

    this.cardStyles = {
      width: "35%",
      minHeight: "520px",
      background: `url(${bgCard})`,
      backgroundSize: "cover",
      backgroundPosition: "center top",
      color: "white",
      position: "absolute",
      padding: "80px 30px 60px 30px",
      zIndex: 1,
      boxShadow: "0px 0px 5px 2px rgba(0,0,0,0.25)",
    };
  
    this.labelStyles = {
      width: "60px",
      position: "absolute",
      top: 0,
      right: 20,
      backgroundColor: "#7350FF",
      padding: "20px 5px 10px 5px",
      display: "flex",
    }
  
    this.titleCardStyles = {
      width: "80%",
    }
  
    this.titleTagCardStyles = { 
      fontSize: "29px" 
    };
  
    this.spanTitleStyles = {
      fontSize: "12px",
    }
  
    this.minicardsBoxStyles = {
      width: "100%",
      height: "90%",
      position: "relative",
      padding: "60px 0 0 20px",
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
      <div className="card-box" style={ this.cardStyles }>
        <div className="label-card" style={ this.labelStyles }>
          <img src={logoAlone} alt="logo-cabify" width="15px" height="15px" />
          <span style={ this.spanTitleStyles }>Cabify</span>
        </div>
        <div className="title-card" style={ this.titleCardStyles }>
          <h1 style={ this.titleTagCardStyles }>Request your business card</h1>
        </div>
        <div className="mini-cards-box" style={ this.minicardsBoxStyles }>
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
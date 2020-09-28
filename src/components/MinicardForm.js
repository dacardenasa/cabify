import React, { Component } from 'react';
import logo from '../img/logo-alone-blue.png';

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

    this.miniCardStyles = {
      width: "75%",
      height: "120px",
      color: "#000",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: "150px",
      left: "60px",
      padding: "20px",
      zIndex: 1,
    }
  
    this.headerInfoStyles = {
      parent: {
        paddingBottom: "10px",
      },
      name: {
        color: "#7350FF", 
        fontSize: "12px"
      },
      job: {
        fontSize: "9px",
        color: "#212240",
      }
    }
  
    this.boxStyles = {
      parent: {
        display: "flex", 
      },
      icon: {
        fontSize: "9px", 
        color: "#ccc",
      },
      content: {
        fontSize: "8px", 
        paddingLeft: "5px",
        color: "rgb(115, 115, 121)",
      }
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
      <div className="mini-card-form" style={this.miniCardStyles}>
  
        <div className="header-info" style={ this.headerInfoStyles.parent }>
          <h4 style={ this.headerInfoStyles.name }>{ this.state.name }</h4>
          <h6 style={ this.headerInfoStyles.job }>{ this.state.job }</h6>
        </div>
  
        <div className="body-info" style={{ display: "flex", flexFlow: "column wrap" }}>
  
          <div className="box" style={ this.boxStyles.parent }>
            <i className="fa fa-phone" aria-hidden="true" style={ this.boxStyles.icon }></i>
            <h6 style={ this.boxStyles.content }>+{ `${this.state.prefix} ${this.state.phone}` }</h6>
          </div>
  
          <div className="box" style={ this.boxStyles.parent }>
            <i className="fa fa-envelope-o" aria-hidden="true" style={ this.boxStyles.icon }></i>
            <h6 style={ this.boxStyles.content }>{ this.state.email }</h6>
          </div>
  
          <div className="box" style={ this.boxStyles.parent }>
            <i className="fa fa-globe" aria-hidden="true" style={ this.boxStyles.icon }></i>
            <h6 style={ this.boxStyles.content }>{ this.state.website }</h6>
          </div>
  
          <div className="box" style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
            <div className="addres-info" style={{ display: "flex" }}> 
              <i className="fa fa-street-view" aria-hidden="true" style={{ fontSize: "9px", color: "#ccc" }}></i>
              <h6 style={{ fontSize: "8px", paddingLeft: "5px", color: "rgb(115, 115, 121)" }}>{ this.state.address }</h6>
            </div>
            <div className="box" style={{ position: "absolute", right: "0", bottom: "0" }}>
              <img src={logo} alt="log-cabify" style={{ width: "15px", height: "15px" }}/>
            </div>
          </div>
  
        </div>
  
      </div>
    );
  }

}

export default MinicardForm;

import React, { Component } from "react";
import CustomSelect from "./CustomSelect";
import Card from "./Card";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      job: "",
      prefix: "",
      phone: "",
      email: "",
      website: "",
      address: "",
      submit: false,
    };

    this.optionSelect = React.createRef();

    this.cardFormStyles = {
      width: "75%",
      minHeight: "500px",
      display: "flex",
      position: "absolute",
      backgroundColor: "#fff",
      marginTop: "10px",
      zIndex: 0,
    };

    this.formStyles = {
      width: "50%",
      display: "flex",
      flexFlow: "column wrap",
      padding: "50px 30px 50px 10px",
    };

    this.formGroupStyles = {
      default: {
        display: "flex",
        flexFlow: "column wrap",
        marginBottom: "10px",
      },
      custom: {
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginBottom: "10px",
      },
      phoneBox: {
        display: "flex",
        width: "70%",
      },
    };

    this.labelStyles = {
      color: "#737379",
      fontSize: "12px",
    };

    this.inputStyles = {
      width: "100%",
      border: "none",
      borderBottom: "1px solid #ccc",
      fontSize: "15px",
      color: "#3f3f44",
      paddingBottom: "5px",
      transition: "all 300ms",
    };

    this.buttonsStyle = {
      width: "100%",
      height: "50px",
      border: "none",
      cursor: "pointer",
      color: "#fff",
      backgroundColor: "#7350ff",
      fontWeight: "bold",
      borderRadius: "5px",
      marginTop: "30px",
      transition: "all 300ms",
    };
  }

  onChangeInputHandler = (event) => {
    event.preventDefault();
    this.setState({
      name: this.name.value,
      job: this.job.value,
      prefix: this.optionSelect.current.getPrefixCountry(),
      phone: this.phone.value,
      email: this.email.value,
      website: this.website.value,
      address: this.address.value,
    });
  }

  onSubmitFormHandler = (event) => {
    event.preventDefault();
    this.setState({
      submit: true
    });
  }

  render() {
    return (
      <>
        <Card
          name={ this.state.name }
          job={ this.state.job }
          prefix={ this.state.prefix }
          phone={ this.state.phone }
          email={ this.state.email }
          website={ this.state.website }
          address={ this.state.address }
        />
        <div className="card-form" style={this.cardFormStyles}>
          <div className="content-blank" style={{ width: "50%" }}></div>
          <form style={this.formStyles} onSubmit={ this.onSubmitFormHandler.bind(this) }>
            <div className="form-group" style={this.formGroupStyles.default}>
              <label htmlFor="full-name" style={this.labelStyles}>
                Full name:
              </label>
              <input 
                type="text" 
                name="fullname" 
                style={ this.inputStyles }
                ref={ node => this.name = node }
                onChange={ this.onChangeInputHandler }
                value={ this.state.name }
              />
            </div>
            <div className="form-group" style={this.formGroupStyles.default}>
              <label htmlFor="job-description" style={this.labelStyles}>
                Job description:
              </label>
              <input
                type="text"
                name="job-description"
                style={this.inputStyles}
                ref={ node => this.job = node }
                onChange={ this.onChangeInputHandler }
                value={ this.state.job }
              />
            </div>
            <div className="form-group" style={this.formGroupStyles.custom}>
              <CustomSelect ref={ this.optionSelect } />
              <div className="phone-box" style={this.formGroupStyles.phoneBox}>
                <input
                  type="number"
                  name="phone-number"
                  style={this.inputStyles}
                  placeholder="Phone number"
                  ref={ node => this.phone = node }
                  onChange={ this.onChangeInputHandler }
                  value={ this.state.phone }
                />
              </div>
            </div>
            <div className="form-group" style={this.formGroupStyles.default}>
              <label htmlFor="full-name" style={this.labelStyles}>
                Email:
              </label>
              <input
                type="email"
                name="job-description"
                style={this.inputStyles}
                ref={ node => this.email = node }
                onChange={ this.onChangeInputHandler }
                value={ this.state.email }
              />
            </div>
            <div className="form-group" style={this.formGroupStyles.default}>
              <label htmlFor="website" style={this.labelStyles}>
                Website:
              </label>
              <input 
                type="text" 
                name="website" 
                style={this.inputStyles} 
                ref={ node => this.website = node }
                onChange={ this.onChangeInputHandler }
                value={ this.state.website }
                />
            </div>
            <div className="form-group" style={this.formGroupStyles.default}>
              <label htmlFor="address" style={this.labelStyles}>
                Address:
              </label>
              <input 
                type="text" 
                name="address" 
                style={this.inputStyles} 
                ref={ node => this.address = node }
                onChange={ this.onChangeInputHandler }
                value={ this.state.address }
                />
            </div>
            <button
              className={this.state.submit ? "disabled" : ""}
              style={this.buttonsStyle}
            >
              Request
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Form;

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
      errors: {
        name: false,
        job: false,
        phone: false,
        email: false,
        website: false,
        address: false,
      },
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
        parent: {
          display: "flex",
          width: "70%",
          position: "relative",
        },
        icon: {
          position: "absolute", 
          color: "red", 
          right: 0,
        }
      },
    };

    this.labelStyles = {
      color: "#737379",
      fontSize: "12px",
    };

    this.inputBoxStyles = {
      parent: {
        width: "100%", 
        position: "relative", 
        display: "flex"
      },
      icon: {
        position: "absolute", 
        color: "red", 
        right: 0,
      },
    }

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

  cleanValidationErrors = ( field ) => {
    if ( this.state.errors[`${ field }`] && this.state[`${ field }`].length > 0 ) { 
      const data = this.state.errors;
      
      const errors = Object.entries(data).reduce((accumulator, currentValue) => {
        if (currentValue[0] === field) {
          accumulator[`${ field }`] = false;
        } else {
          accumulator[`${ currentValue[0] }`] = currentValue[1];
        }
        return accumulator;
      },{})

      this.setState({errors});
    }
  }

  onChangeInputHandler = (event) => {
    event.preventDefault();
    this.cleanValidationErrors(event.target.name);

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
    
    let errors = {};
    const { name, job, phone, email, website, address } = this.state;
    const dataInput = [ 
      { property: "name", name }, 
      { property: "job", job }, 
      { property: "phone", phone }, 
      { property: "email", email }, 
      { property: "website", website }, 
      { property:"address", address } 
    ];

    const errorsData = dataInput.reduce( (accumulator, currentValue) => {
      if (currentValue[`${currentValue.property}`].length === 0) {
        errors[`${ currentValue.property }`] = true;
        this.setState({errors});
        accumulator.push(currentValue);
      }
      return accumulator;
    },[])

    if ( errorsData.length === 0 ) {
      this.setState({
        submit: true
      });
    } 
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

              <div className="input-box" style={ this.inputBoxStyles.parent }>
                <input 
                  type="text" 
                  name="name"
                  className={ this.state.errors.name ? "error ": "" } 
                  style={ this.inputStyles }
                  ref={ node => this.name = node }
                  onChange={ this.onChangeInputHandler }
                  value={ this.state.name }
                />
                <i className={ this.state.errors.name ? "fa fa-exclamation-circle show" : "fa fa-exclamation-circle hide" } aria-hidden="true" style={ this.inputBoxStyles.icon }></i>
              </div>

            </div>
            <div className="form-group" style={this.formGroupStyles.default}>
              <label htmlFor="job-description" style={this.labelStyles}>
                Job description:
              </label>
              
              <div className="input-box" style={ this.inputBoxStyles.parent }>
                <input
                  type="text"
                  name="job"
                  className={ this.state.errors.job ? "error ": "" } 
                  style={this.inputStyles}
                  ref={ node => this.job = node }
                  onChange={ this.onChangeInputHandler }
                  value={ this.state.job }
                />
                <i className={ this.state.errors.job ? "fa fa-exclamation-circle show" : "fa fa-exclamation-circle hide" } aria-hidden="true" style={ this.inputBoxStyles.icon }></i>
              </div>

            </div>
            <div className="form-group" style={this.formGroupStyles.custom}>
              <CustomSelect ref={ this.optionSelect } />
              <div className="phone-box" style={ this.formGroupStyles.phoneBox.parent }>
                <input
                  type="text"
                  name="phone"
                  className={ this.state.errors.phone ? "error ": "" } 
                  style={this.inputStyles}
                  placeholder="Phone number"
                  ref={ node => this.phone = node }
                  onChange={ this.onChangeInputHandler }
                  value={ this.state.phone }
                />
                <i className={ this.state.errors.phone ? "fa fa-exclamation-circle show" : "fa fa-exclamation-circle hide" } aria-hidden="true" style={ this.formGroupStyles.phoneBox.icon }></i>
              </div>
            </div>
            <div className="form-group" style={this.formGroupStyles.default}>
              <label htmlFor="full-name" style={this.labelStyles}>
                E-mail:
              </label>

              <div className="input-box" style={ this.inputBoxStyles.parent }>
                <input
                  type="email"
                  name="email"
                  className={ this.state.errors.email ? "error ": "" } 
                  style={this.inputStyles}
                  ref={ node => this.email = node }
                  onChange={ this.onChangeInputHandler }
                  value={ this.state.email }
                />
                <i className={ this.state.errors.email ? "fa fa-exclamation-circle show" : "fa fa-exclamation-circle hide" } aria-hidden="true" style={ this.inputBoxStyles.icon }></i>
              </div>

            </div>
            <div className="form-group" style={this.formGroupStyles.default}>
              <label htmlFor="website" style={this.labelStyles}>
                Website:
              </label>

              <div className="input-box" style={ this.inputBoxStyles.parent }>
                <input 
                  type="text" 
                  name="website" 
                  className={ this.state.errors.website ? "error ": "" } 
                  style={this.inputStyles} 
                  ref={ node => this.website = node }
                  onChange={ this.onChangeInputHandler }
                  value={ this.state.website }
                />
                <i className={ this.state.errors.website ? "fa fa-exclamation-circle show" : "fa fa-exclamation-circle hide" } aria-hidden="true" style={ this.inputBoxStyles.icon }></i>
              </div>
              
            </div>
            <div className="form-group" style={this.formGroupStyles.default}>
              <label htmlFor="address" style={this.labelStyles}>
                Address:
              </label>

              <div className="input-box" style={ this.inputBoxStyles.parent }>
                <input 
                  type="text" 
                  name="address"
                  className={ this.state.errors.address ? "error ": "" }  
                  style={this.inputStyles} 
                  ref={ node => this.address = node }
                  onChange={ this.onChangeInputHandler }
                  value={ this.state.address }
                />
                <i className={ this.state.errors.address ? "fa fa-exclamation-circle show" : "fa fa-exclamation-circle hide" } aria-hidden="true" style={ this.inputBoxStyles.icon }></i>
              </div>

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

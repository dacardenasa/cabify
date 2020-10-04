import React, { Component } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import Card from "../Card/Card";
import styles from './CardForm.module.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      job: "",
      prefix: "",
      phone: "",
      email: "",
      website: "",
      address: "",
      submit: false,
      errors: {
        name: false,
        job: false,
        phone: false,
        email: false,
        website: false,
        address: false,
      },
    };

    this.optionSelect = React.createRef();

  }

  loadValidationErrors = () => {
    let errors = {};
    const { name, job, phone, email, website, address } = this.state;
    const dataInput = [ 
      { property: "name", content: name }, 
      { property: "job", content: job }, 
      { property: "phone", content: phone }, 
      { property: "email", content: email }, 
      { property: "website", content: website }, 
      { property:"address", content: address } 
    ];

    const errorsData = dataInput.reduce( (accumulator, currentValue) => {
      const { property, content } = currentValue;
      if (content.length === 0) {
        errors[`${ property }`] = true;
        accumulator.push(currentValue);
      }
      return accumulator;
    },[]);

    this.setState({errors});

    return errorsData;
  }

  cleanValidationErrors = ( field ) => {
    if ( this.state.errors[`${ field }`] && this.state[`${ field }`].length > 0 ) { 
      const errorsState = this.state.errors;
      
      const errors = Object.entries(errorsState).reduce( (accumulator, currentValue) => {
        const [ propertyName, value] = currentValue;
        if ( propertyName === field) {
          accumulator[`${ propertyName }`] = false;
        } else {
          accumulator[`${ propertyName }`] = value;
        }
        return accumulator;
      },{})

      this.setState({errors});
    }
  }

  onChangeInputHandler = (event) => {
    event.preventDefault();
    const stateName = event.target.name;
    this.cleanValidationErrors(stateName);
    this.setState({
      [stateName]: this[stateName].value,
      prefix: this.optionSelect.current.getPrefixCountry(),
    });
  }

  onSubmitFormHandler = (event) => {
    event.preventDefault();
    
    const errorsData = this.loadValidationErrors();

    if ( errorsData.length === 0 ) {
      this.setState({
        submit: true
      });
      console.log("Sending data to WEB API resource in progress....");
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
        <div className={ styles.cardFormStyles }>
          <div className="content-blank" style={{ width: "50%" }}></div>
          <form className={ styles.formStyles } onSubmit={ this.onSubmitFormHandler.bind(this) }>

            <div className={ styles.formGroupBoxStyles }>
              <label htmlFor="full-name" className={ styles.labelFormStyles }>
                Full name:
              </label>
              <div className={ styles.boxTagStyles }>
                <input 
                  type="text" 
                  name="name"
                  className={ this.state.errors.name ? styles.inputStyles + " error ": styles.inputStyles } 
                  ref={ node => this.name = node }
                  onChange={ this.onChangeInputHandler }
                  value={ this.state.name }
                />
                <i className={ this.state.errors.name ? styles.iconFormTagStyles + " fa fa-exclamation-circle show" : " fa fa-exclamation-circle hide" } aria-hidden="true"></i>
              </div>
            </div>

            <div className={ styles.formGroupBoxStyles }>
              <label htmlFor="job-description" className={ styles.labelFormStyles }>
                Job description:
              </label>
              <div className={ styles.boxTagStyles }>
                <input
                  type="text"
                  name="job"
                  className={ this.state.errors.name ? styles.inputStyles + " error ": styles.inputStyles } 
                  ref={ node => this.job = node }
                  onChange={ this.onChangeInputHandler }
                  value={ this.state.job }
                />
                <i className={ this.state.errors.job ? styles.iconFormTagStyles + " fa fa-exclamation-circle show" : " fa fa-exclamation-circle hide" } aria-hidden="true"></i>
              </div>
            </div>

            <div className={ styles.customFormGroupBoxStyles }>
              <CustomSelect ref={ this.optionSelect } />
              <div className={ styles.phoneBoxTagStyles }>
                <input
                  type="text"
                  name="phone"
                  className={ this.state.errors.name ? styles.inputStyles + " error ": styles.inputStyles } 
                  placeholder="Phone number"
                  ref={ node => this.phone = node }
                  onChange={ this.onChangeInputHandler }
                  value={ this.state.phone }
                />
                <i className={ this.state.errors.phone ? styles.iconFormTagStyles + " fa fa-exclamation-circle show" : " fa fa-exclamation-circle hide" } aria-hidden="true"></i>
              </div>
            </div>

            <div className={ styles.formGroupBoxStyles }>
              <label htmlFor="email" className={ styles.labelFormStyles }>
                E-mail:
              </label>
              <div className={ styles.boxTagStyles }>
                <input
                  type="email"
                  name="email"
                  className={ this.state.errors.name ? styles.inputStyles + " error ": styles.inputStyles } 
                  ref={ node => this.email = node }
                  onChange={ this.onChangeInputHandler }
                  value={ this.state.email }
                />
                <i className={ this.state.errors.email ? styles.iconFormTagStyles + " fa fa-exclamation-circle show" : " fa fa-exclamation-circle hide" } aria-hidden="true"></i>
              </div>
            </div>

            <div className={ styles.formGroupBoxStyles }>
              <label htmlFor="website" className={ styles.labelFormStyles }>
                Website:
              </label>
              <div className={ styles.boxTagStyles }>
                <input 
                  type="text" 
                  name="website" 
                  className={ this.state.errors.name ? styles.inputStyles + " error ": styles.inputStyles } 
                  ref={ node => this.website = node }
                  onChange={ this.onChangeInputHandler }
                  value={ this.state.website }
                />
                <i className={ this.state.errors.website ? styles.iconFormTagStyles + " fa fa-exclamation-circle show" : " fa fa-exclamation-circle hide" } aria-hidden="true"></i>
              </div>
            </div>

            <div className={ styles.formGroupBoxStyles }>
              <label htmlFor="address" className={ styles.labelFormStyles }>
                Address:
              </label>
              <div className={ styles.boxTagStyles }>
                <input 
                  type="text" 
                  name="address"
                  className={ this.state.errors.name ? styles.inputStyles + " error ": styles.inputStyles } 
                  ref={ node => this.address = node }
                  onChange={ this.onChangeInputHandler }
                  value={ this.state.address }
                />
                <i className={ this.state.errors.address ? styles.iconFormTagStyles + " fa fa-exclamation-circle show" : " fa fa-exclamation-circle hide" } aria-hidden="true"></i>
              </div>
            </div>

            <button
              className={ this.state.submit ? styles.buttonsStyle + " disabled" : styles.buttonsStyle }
              disabled={ this.state.submit }
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

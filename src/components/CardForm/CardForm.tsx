import React, { Component } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import Card from "../Card/Card";
const styles = require("./CardForm.module.css");

class Form extends Component {

  state: FormInputProps = {
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

  private optionSelect = React.createRef<CustomSelect>();

  loadValidationErrors = () => {
    let errors:FormInputErrorsProps = {} as FormInputErrorsProps;
    const { name, job, phone, email, website, address } = this.state;
    const fieldsForm = [
      { property: "name", content: name },
      { property: "job", content: job },
      { property: "phone", content: phone },
      { property: "email", content: email },
      { property: "website", content: website },
      { property: "address", content: address },
    ];

    const errorsData = fieldsForm.reduce((accumulator, currentValue) => {
      const { property, content } = currentValue;
      
      const field:propStateErrors = property as propStateErrors;
      if (content.length === 0) {
        errors[field] = true;
        accumulator.push(currentValue);
      }
      return accumulator;
    }, [] as FormOutputErrorsFormat);

    this.setState({ errors });

    return errorsData;
  };

  cleanValidationErrors = ( fieldName: string ) => {
    const field:propStateErrors = fieldName as propStateErrors;
    
    if (this.state.errors[field] && this.state[field].length > 0) {
      const errorsState:FormInputErrorsProps = this.state.errors;

      const errors = Object.entries(errorsState).reduce( (accumulator, currentValue) => {
        const [ propertyName, value] = currentValue;

        const field:propStateErrors = propertyName as propStateErrors;

        if ( propertyName === fieldName) {
          accumulator[field] = false;
        } else {
          accumulator[field] = value;
        }
        return accumulator;
      },{} as FormInputErrorsProps)

      this.setState({errors});

    }
  };

  onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.cleanValidationErrors( name );
    this.setState({
      [name]: value,
      prefix: this.optionSelect.current?.getPrefixCountry(),
    });
  };

  onSubmitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errorsData = this.loadValidationErrors();
    if (errorsData.length === 0) {
      this.setState({
        submit: true,
      });
      console.log("Sending data to WEB API resource in progress....");
    }
  };

  disabledButton = (): boolean => {
    return (this.state.submit) ? true : false;
  }

  render() {
    return (
      <>
        <Card
          name={this.state.name}
          job={this.state.job}
          prefix={this.state.prefix}
          phone={this.state.phone}
          email={this.state.email}
          website={this.state.website}
          address={this.state.address}
        />
        <div className={styles.cardFormStyles}>
          <div className="content-blank" style={{ width: "50%" }}></div>
          <form
            className={styles.formStyles}
            onSubmit={ e => this.onSubmitFormHandler(e) }
          >
            <div className={styles.formGroupBoxStyles}>
              <label htmlFor="full-name" className={styles.labelFormStyles}>
                Full name:
              </label>
              <div className={styles.boxTagStyles}>
                <input
                  type="text"
                  name="name"
                  className={
                    this.state.errors.name
                      ? styles.inputStyles + " error "
                      : styles.inputStyles
                  }
                  onChange={ e => this.onChangeInputHandler(e) }
                  value={this.state.name}
                />
                <i
                  className={
                    this.state.errors.name
                      ? styles.iconFormTagStyles +
                        " fa fa-exclamation-circle show"
                      : " fa fa-exclamation-circle hide"
                  }
                  aria-hidden="true"
                ></i>
              </div>
            </div>

            <div className={styles.formGroupBoxStyles}>
              <label
                htmlFor="job-description"
                className={styles.labelFormStyles}
              >
                Job description:
              </label>
              <div className={styles.boxTagStyles}>
                <input
                  type="text"
                  name="job"
                  className={
                    this.state.errors.name
                      ? styles.inputStyles + " error "
                      : styles.inputStyles
                  }
                  onChange={ e => this.onChangeInputHandler(e) }
                  value={this.state.job}
                />
                <i
                  className={
                    this.state.errors.job
                      ? styles.iconFormTagStyles +
                        " fa fa-exclamation-circle show"
                      : " fa fa-exclamation-circle hide"
                  }
                  aria-hidden="true"
                ></i>
              </div>
            </div>

            <div className={styles.customFormGroupBoxStyles}>
              <CustomSelect ref={ this.optionSelect } />
              <div className={styles.phoneBoxTagStyles}>
                <input
                  type="text"
                  name="phone"
                  className={
                    this.state.errors.name
                      ? styles.inputStyles + " error "
                      : styles.inputStyles
                  }
                  placeholder="Phone number"
                  onChange={ e => this.onChangeInputHandler(e) }
                  value={this.state.phone}
                />
                <i
                  className={
                    this.state.errors.phone
                      ? styles.iconFormTagStyles +
                        " fa fa-exclamation-circle show"
                      : " fa fa-exclamation-circle hide"
                  }
                  aria-hidden="true"
                ></i>
              </div>
            </div>

            <div className={styles.formGroupBoxStyles}>
              <label htmlFor="email" className={styles.labelFormStyles}>
                E-mail:
              </label>
              <div className={styles.boxTagStyles}>
                <input
                  type="email"
                  name="email"
                  className={
                    this.state.errors.name
                      ? styles.inputStyles + " error "
                      : styles.inputStyles
                  }
                  onChange={ e => this.onChangeInputHandler(e) }
                  value={this.state.email}
                />
                <i
                  className={
                    this.state.errors.email
                      ? styles.iconFormTagStyles +
                        " fa fa-exclamation-circle show"
                      : " fa fa-exclamation-circle hide"
                  }
                  aria-hidden="true"
                ></i>
              </div>
            </div>

            <div className={styles.formGroupBoxStyles}>
              <label htmlFor="website" className={styles.labelFormStyles}>
                Website:
              </label>
              <div className={styles.boxTagStyles}>
                <input
                  type="text"
                  name="website"
                  className={
                    this.state.errors.name
                      ? styles.inputStyles + " error "
                      : styles.inputStyles
                  }
                  onChange={ e => this.onChangeInputHandler(e) }
                  value={this.state.website}
                />
                <i
                  className={
                    this.state.errors.website
                      ? styles.iconFormTagStyles +
                        " fa fa-exclamation-circle show"
                      : " fa fa-exclamation-circle hide"
                  }
                  aria-hidden="true"
                ></i>
              </div>
            </div>

            <div className={styles.formGroupBoxStyles}>
              <label htmlFor="address" className={styles.labelFormStyles}>
                Address:
              </label>
              <div className={styles.boxTagStyles}>
                <input
                  type="text"
                  name="address"
                  className={
                    this.state.errors.name
                      ? styles.inputStyles + " error "
                      : styles.inputStyles
                  }
                  onChange={ e => this.onChangeInputHandler(e) }
                  value={this.state.address}
                />
                <i
                  className={
                    this.state.errors.address
                      ? styles.iconFormTagStyles +
                        " fa fa-exclamation-circle show"
                      : " fa fa-exclamation-circle hide"
                  }
                  aria-hidden="true"
                ></i>
              </div>
            </div>

            <button
              className={
                this.state.submit
                  ? styles.buttonsStyle + " disabled"
                  : styles.buttonsStyle
              }
              disabled={this.disabledButton()}
            >
              Request
            </button>
          </form>
        </div>
      </>
    );
  }
}

type FormInputProps = {
  name: string,
  job: string,
  prefix: string,
  phone: string,
  email: string,
  website: string,
  address: string,
  submit: Boolean,
  errors: FormInputErrorsProps
};

type FormInputErrorsProps = {
  name: boolean,
  job: boolean,
  phone: boolean,
  email: boolean,
  website: boolean,
  address: boolean
}

type FormOutputErrorsFormat = Array<{ property:string, content:string }>

type propStateErrors = keyof FormInputErrorsProps;

export default Form;

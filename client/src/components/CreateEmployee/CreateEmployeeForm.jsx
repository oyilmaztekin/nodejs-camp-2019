import React, { Component, Fragment } from "react";
import formHandlerHOC from "./formHandler";
import axios from "axios";
class CreateEmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      age: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showSuccessMessage = this.showSuccessMessage.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    let value = event.target.value;
    const name = event.target.name;

    if (name === "age") {
      value = parseInt(value);
    }
    event.target.value &&
      this.setState({
        [name]: value
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/createEmployee", {
        name: this.state.name,
        email: this.state.email,
        age: this.state.age,
        mobile: this.state.mobile
      })
      .then(({ data }) => {
        this.setState({
          formSuccess: true,
          data: data
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          formError: true,
          err: err.data.errorMessage
        });
      });
  }

  showSuccessMessage(data) {
    // return user and success message
  }

  render() {
    const {
      name,
      email,
      age,
      formError,
      err,
      mobile
    } = this.state;
    return (
      <Fragment>
        {formError ? <span class="alert alert-danger"> {err} </span> : null}
        {/* {formSuccess ? (
          <span class="alert alert-success"> {data.toString()} </span>
        ) : null} */}
        {
          // if formSuccess -> this.showSuccessMessage
        }

        <form onSubmit={this.handleSubmit}>
          <h3>Müşteri Kaydet</h3>

          <div className="form-group">
            <label>{this.props.firstInputName}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Adı Soyadı"
              name="name"
              onChange={this.handleChange}
              value={name}
            />
          </div>

          <div className="form-group">
            <label>Eposta Adresi</label>
            <input
              type="email"
              className="form-control"
              placeholder="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Yaş</label>
            <input
              type="number"
              className="form-control"
              placeholder="Yaş giriniz"
              name="age"
              value={age}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>>Telefon</label>
            <input
              type="text"
              className="form-control"
              placeholder="Telefon Giriniz"
              name="mobile"
              value={mobile}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Müşteriyi Kaydet
          </button>
        </form>
      </Fragment>
    );
  }
}

export default formHandlerHOC(CreateEmployeeForm);

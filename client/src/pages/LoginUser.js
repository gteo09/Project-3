import React, { Component } from "react";
// import Login from "../components/Login";
// import Navbar from "../components/Navbar";
import Animals from "../images/animals.jpg";
//import {Link} from "react-router-dom"
import {connect} from "react-redux";
import {loginUser} from "../actions/authActions"



class LoginUser extends Component {


  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }


  componentDidMount() {

    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/privateprofile");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
     this.props.history.push("/privateprofile");
    }
    if (nextProps.errors) {
     this.setState({
      errors: nextProps.errors
     });
    }
   }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {

    var sectionStyle = {
        backgroundImage: `url(${Animals})`
      }

    const { errors } = this.state;
  
    return (
        <div style={sectionStyle} className="backgroundimage">
            <div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps,{ loginUser })(LoginUser);


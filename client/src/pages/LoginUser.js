import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
// import Login from "../components/Login";
// import Navbar from "../components/Navbar";
//import {Link} from "react-router-dom"
import {connect} from "react-redux";
import {loginUser} from "../actions/authActions"
import TempImage from "../images/farmwithwhite.jpg"
import LoginCSS from "./pageStyles/loginuser.css"



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

    const { errors } = this.state;
  
    return (


<div className="main">  
  <div>
      <section className="sign-in">
            <div className="container containerlogprops">
                <div className="signin-content logprops">
                    <div className="signin-image">
                        <figure><img src={TempImage} alt="sign up"/></figure>
                        Don't have an account?
                        <Link to="/register"> Click here!</Link>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign in</h2>
                        <form noValidate onSubmit={this.onSubmit} className="register-form" id="login-form">
                            <div className="form-group input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                    placeholder="E-mail"
                                />
                                <label for="username" htmlFor="email">
                                    <i className="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                <span className="red-text">
                                    {errors.email}
                                    {errors.emailnotfound}
                                </span>
                            </div>
                            <div className="form-group input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                id="password"
                                type="password"
                                placeholder="Password"
                            />
                            <label for="password" htmlFor="password">
                                <i className="zmdi zmdi-lock"></i>
                            </label>
                            <span className="red-text">
                                {errors.password}
                                {errors.passwordincorrect}
                            </span>
                            </div>
                            <div className="form-group form-button col s12" style={{ paddingLeft: "11.250px" }}>
                                <input
                                    style={{  
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem"
                                    }}
                                    type="submit"
                                    name="signin"
                                    id="signin"
                                    className="form-submit btn btn-large waves-effect waves-light hoverable blue accent-3"
                                    value="Log In"
                                    />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
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


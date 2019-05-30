import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import "./Register.css";
import TempImage from "../../images/farmwithwhite.jpg";
import API from "../../utils/API";


class Register extends React.Component {

    state={
        username:"",
        email:"",
        password:"",
        password2:""
    }

    handleInputChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]:value
        })
    };

    handleFormSubmit = event =>{
        event.preventDefault();

        if(this.state.username && this.state.email && this.state.password && this.state.password2){
            API.registerUser({
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                password2: this.state.password2
            }).then(res=>{
                console.log(res);

            }).catch(err=>{
                console.log(err);
            })
        }
    }


render(){

    return(
        <div className="main">
            <section className="signup">
                <div className="container containerregprops">
                    <div className="signup-content regprops">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form method="POST" className="register-form" id="register-form" action="/register">
                                <div className="form-group">
                                    <label for="username"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="username" id="username" placeholder="Username" value={this.state.username} onChange={this.handleInputChange}/>
                                </div>
                                <div className="form-group">
                                    <label for="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" value={this.state.email} onChange={this.handleInputChange}/>
                                </div>
                                <div className="form-group">
                                    <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="password" id="pass" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}/>
                                </div>
                                <div className="form-group">
                                    <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input type="password" name="password2" id="re_pass" placeholder="Repeat your password" value={this.state.password2} onChange={this.handleInputChange}/>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="register" id="signup" className="form-submit" value="Register" onClick={this.handleFormSubmit}/>
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img src={TempImage} alt=""/></figure>
                            <Link to="/" className="signup-image-link">I am already member</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
 
    )

}
}

  

export default Register;

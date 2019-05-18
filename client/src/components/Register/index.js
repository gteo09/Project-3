import React from "react";
import "./Register.css";

const Register = () => (
//   <div class="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins register">
//   <div class="wrapper wrapper--w780">
//       <div class="card card-3">
//           <div class="card-heading"></div>
//           <div class="card-body">
//               <h2 class="title">Registration Info</h2>
//               <form method="POST" action="/register">
//                   <div className="input-group">
//                       <input className="input--style-3 formInput" type="text" placeholder="Restaurant" name="username"></input>
//                   </div>
//                   <div className="input-group">
//                       <input className="input--style-3 formInput" type="email" placeholder="Email" name="email"></input>
//                   </div>
//                   <div className="input-group">
//                       <input className="input--style-3 formInput" type="password" placeholder="Password" name="password"></input>
//                   </div>
//                   <div className="p-t-10">
//                       <button className="btn btn--pill btn--green registerButton" type="register">Register</button>
//                   </div>
//               </form>
//           </div>
//       </div>
//   </div>
// </div>

<div className="main">
    <section className="signup">
        <div className="container">
            <div className="signup-content">
                <div className="signup-form">
                    <h2 className="form-title">Sign up</h2>
                    <form method="POST" className="register-form" id="register-form" action="/register">
                        <div className="form-group">
                            <label for="username"><i className="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="username" id="username" placeholder="Username"/>
                        </div>
                        <div className="form-group">
                            <label for="email"><i className="zmdi zmdi-email"></i></label>
                            <input type="email" name="email" id="email" placeholder="Your Email"/>
                        </div>
                        <div className="form-group">
                            <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                            <input type="password" name="password" id="pass" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                            <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                        </div>
                        <div className="form-group form-button">
                            <input type="submit" name="register" id="signup" className="form-submit" value="Register"/>
                        </div>
                    </form>
                </div>
                <div className="signup-image">
                    <figure><img src="" alt="sign up image"/></figure>
                    <a href="/" className="signup-image-link">I am already member</a>
                </div>
            </div>
        </div>
    </section>
</div>

  );

export default Register;

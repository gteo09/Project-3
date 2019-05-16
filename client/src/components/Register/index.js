import React from "react";
import "./Register.css";

const Register = () => (
  <div class="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins register">
  <div class="wrapper wrapper--w780">
      <div class="card card-3">
          <div class="card-heading"></div>
          <div class="card-body">
              <h2 class="title">Registration Info</h2>
              <form method="POST" action="/register">
                  <div className="input-group">
                      <input className="input--style-3" type="text" placeholder="Restaurant" name="username"></input>
                  </div>
                  <div className="input-group">
                      <input className="input--style-3" type="email" placeholder="Email" name="email"></input>
                  </div>
                  <div className="input-group">
                      <input className="input--style-3" type="password" placeholder="Password" name="password"></input>
                  </div>
                  <div className="p-t-10">
                      <button className="btn btn--pill btn--green" type="register">Register</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
</div>
  );

export default Register;

import React, {Component} from "react";
import "../pages/pageStyles/myprofile.css";
import { connect } from "react-redux";
import API from "../utils/API";
 



class UserProfile extends Component {


componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
     
render(){  
    console.log(this.props.auth.user)     
    return(
        <div className="profileborder">
            <div className = "container-fluid profilecontainer">
                <div className ="row profileprops">
                    <div className="col-sm">
                    <h1>{this.props.auth.user.username}</h1>
                    <p>{this.props.auth.user.address}</p>
                    <p>{this.props.auth.user.phoneNumber}</p>
                    <p>{this.props.auth.user.email}</p>
                    <a href={this.props.auth.user.website}>{this.props.auth.user.website}</a>
                    </div>  
                </div>
            </div>
            <div className = "row">
                <div className="col-3">
                </div>
                <div className="col-2">
                </div>
                <div className="col-6 profileprops">
                <h1>Our Values</h1>
                    <p>{this.props.auth.user.description}</p>
                </div>                
            </div>
        </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps)(UserProfile);

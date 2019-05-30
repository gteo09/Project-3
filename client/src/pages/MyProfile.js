import React, {Component} from "react";
import {List, ListItem} from "../components/List";
import Navbar from "../components/Navbar";
import "../pages/pageStyles/myprofile.css";
import { connect } from "react-redux";
import API from "../utils/API";
 



class UserProfile extends Component {


componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
     
render(){  
    console.log(this.props.auth.user.username)     
    return(
        <div className="profileborder">
            {/* <Navbar /> */}
            <h1>{this.props.auth.user.username}</h1>
            <div className = "container-fluid profilecontainer">
                <div className ="row profileprops">
                    <div className="col-sm">
                    {/* <h1>{this.state.name}</h1> */}
                    {/* <h1>this.state.profile.image</h1>
                    <p>this.state.profile.contact</p> */}
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
                    <p>this.state.profile.description</p>
                    Products Currently Available
                    <List>
                        {this.state.profile.products.map(product=>(
                            <ListItem key={product.id} color={product.color} name={product.name}>
                            </ListItem>
                        ))}    
                    </List>
                </div> */}
                
            </div>
        </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps)(UserProfile);

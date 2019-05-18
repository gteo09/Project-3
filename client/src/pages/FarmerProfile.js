import React, {Component} from "react";
import Map from "../components/Map";
import {List, ListItem} from "../components/List";
import Navbar from "../components/Navbar";

class FarmProfile extends Component {

    state = {
        //empty object to be filled by api call to database
        profile: {
            description:"",
            image:"",
            location:{lat:"",lng:""},
            //test products, this array should be populated from database
            products:[ 
                {id: 35, name: 'jumper', color: 'red', price: 20},
                {id: 42, name: 'shirt', color: 'blue', price: 15},
                {id: 56, name: 'pants', color: 'green', price: 25},
                {id: 71, name: 'socks', color: 'black', price: 5},
                {id: 72, name: 'socks', color: 'white', price: 5}
            ]
        }
    }

    /*this function will grab data from api call and assign to this component's state
    to be accessed to populate the fields below */

// componentDidMount(){
//     API.getProfile(this.props.match.params.id)
//     .then(res=>this.setState({profile: res.data}))
//     .catch(err=>console.log(err))
// }

render(){       
    return(
        <div>
            <Navbar />
            <div className = "container-fluid">
                <div className ="row">
                    <div className="col-sm">
                    <h1>this.state.profile.name</h1>
                    <h1>this.state.profile.image</h1>
                    <p>this.state.profile.contact</p>
                    </div>
                    
                </div>
            </div>
            <div className = "row">
                <div className="col-3">
                    <Map  />
                </div>
                <div className="col-2">
                </div>
                <div className="col-6">
                <h1>Our Values</h1>
                    <p>this.state.profile.description</p>
                    Products Currently Available
                    <List>
                        {this.state.profile.products.map(product=>(
                            <ListItem key={product.id} color={product.color} name={product.name}>
                            </ListItem>
                        ))}    
                    </List>
                </div>
                
            </div>
        </div>
        )
    }
}

export default FarmProfile;
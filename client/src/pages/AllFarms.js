import React, {Component} from "react";
import Map from "../components/Map";
import {List, ListItem} from "../components/List";
import Navbar from "../components/Navbar";

class AllFarms extends Component {

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
            <h1>Local producers</h1>
            <div className = "row">
                <div className="col-3">
                {/* map will display farm locations and have clickable markers with infowindows */}
                    <Map  />
                </div>
                <div className="col-2">
                </div>
                <div className="col-6">
                <h1>Farms in our Database</h1>
                    {/* this list will check state and loop over "products array" - will be renamed after hooking up database */}
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

export default AllFarms;
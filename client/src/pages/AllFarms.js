import React, {Component} from "react";
import Map from "../components/Map";
import {List, ListItem} from "../components/List";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import "./pageStyles/allfarms.css"

class AllFarms extends Component {

    state = {
        //empty object to be filled by api call to database

        farms:[]
        
            // name:"",
            // address:"",
            // phoneNumber:"",
            //test products, this array should be populated from database
            // products:[ 
            //     {id: 35, name: 'jumper', color: 'red', price: 20},
            //     {id: 42, name: 'shirt', color: 'blue', price: 15},
            //     {id: 56, name: 'pants', color: 'green', price: 25},
            //     {id: 71, name: 'socks', color: 'black', price: 5},
            //     {id: 72, name: 'socks', color: 'white', price: 5}
            // ]
        
    }

    /*this function will grab data from api call and assign to this component's state
    to be accessed to populate the fields below */

    componentDidMount(){

        this.getInfo();

    }

    getInfo = () =>{
        API.getInfo().then(res=>{

            this.setState({farms:res.data})
            
        }).catch(err=>console.log(err));
        
    }
    

// componentDidMount(){
//     API.getProfile(this.props.match.params.id)
//     .then(res=>this.setState({profile: res.data}))
//     .catch(err=>console.log(err))
// }

render(){       
    return(
        <div>
        {/* <Navbar /> */}
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
                    {this.state.farms.length ? (
                        <List>
                            {this.state.farms.map(farm=>(
                                <ListItem key={farm.id}>
                                    <Link to={"/farmprofiles/"+farm.id}>{farm.name}</Link>
                                    <p>{farm.address}</p>
                                    <a href = {farm.website} target="_blank" rel="noopener noreferrer">{farm.website}</a>
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                    <h3>no results found</h3>
                    )}
                </div>               
            </div>
        </div>       
        )
    }
}

export default AllFarms;
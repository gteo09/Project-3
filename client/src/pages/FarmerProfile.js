import React, {Component} from "react";
import Map from "../components/Map";
import {List, ListItem} from "../components/List";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import "./pageStyles/farmerprofile.css";
import axios from "axios";

class FarmProfile extends Component {

    state = {
        //empty object to be filled by api call to database
        name:"",
        description:"",
        image:"",
        location:{lat:"",lng:""},
        address:"",
        phoneNumber:"",
        //test products, this array should be populated from database
        products:"",
        website:""
    }

    /*this function will grab data from api call and assign to this component's state
    to be accessed to populate the fields below */

componentDidMount(){

    this.loadData();

};

loadData(){

    API.findById(this.props.match.params.id)
    .then(res=>{

        this.setState({
            name:res.data[0].name,
            description: res.data[0].description,
            address: res.data[0].address,
            phoneNumber:res.data[0].phoneNumber,
            products:res.data[0].products,
            website:res.data[0].website
        })
        //passes address from database to getcoords to retrieve lat/lng
        this.getCoords(this.state.address);

    }).catch(err=>console.log(err))   
}

//calls geocode to convert state.address to lat/lng
getCoords(address){

    //calls geocode api to convert address from res into latitude and longitude
    axios.get("https://maps.googleapis.com/maps/api/geocode/json",{
        params:{
            address: address,
            key:"AIzaSyB6OceBab84YIQGM0OPCIH89IqydDBckr4"
        }
    })
    .then(response=>{
        this.setState({location:{
            lat:response.data.results[0].geometry.location.lat,
            lng:response.data.results[0].geometry.location.lng
            } 
        }) 
    })
};

render(){       
    return(
        <div>
            {/* <Navbar /> */}
                <div className = "container-fluid" id="contact">
                    <div className ="row" >
                        <div className="col-sm">
                            <h1>{this.state.name}</h1>
                            <h1>this.state.profile.image</h1>
                            <p>{this.state.address}</p>
                            <p>{this.state.phoneNumber}</p>
                            <p>{this.state.website}</p>
                        </div>   
                    </div>
                </div>
                <div className="container-fluid">
                    <div className = "row">
                        <div className="col-3">
                            <Map lat={this.state.location.lat} lng={this.state.location.lng} />
                        </div>
                        <div className="col-2">
                        </div>
                        <div className="col-6" id="provalues">
                            <h1>Our Values</h1>
                                <p>{this.state.description}</p>
                                Products Currently Available
                                <p>{this.state.products}</p>
                                {/* <List>
                                    {this.state.profile.products.map(product=>(
                                        <ListItem key={product.id} color={product.color} name={product.name}>
                                        </ListItem>
                                    ))}    
                                </List> */}
                        </div>               
                    </div>
                </div>
        </div>
        )
    }
}

export default FarmProfile;
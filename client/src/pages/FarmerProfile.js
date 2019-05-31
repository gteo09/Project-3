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

    window.scrollTo({ top: 0, behavior: 'smooth' });

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
            <div className = "container-fluid farminfo" id="contact">
                <div className ="row farmerprops" >
                    <div className="col-sm">
                        <h1>{this.state.name}</h1>
                        <p>Address: {this.state.address}</p>
                        <p>Phone: {this.state.phoneNumber}</p>
                        <p>Website: <a href={this.state.website} target="_blank" rel="noopener noreferrer">{this.state.website}</a></p>
                    </div>   
                </div>
            </div>
            <div className="container-fluid ourvalues">
                <div className ="row farmerprops">
                    <div className="col-lg-6 col-12 mapprops">
                        <Map lat={this.state.location.lat} lng={this.state.location.lng} name={this.state.name} className="" />
                    </div>
                    <div className="col-lg-6 col-12" id="provalues">
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
import React, {Component} from "react";
import "./styles.css";
import axios from "axios";
import API from "../../utils/API"

class Map extends Component{

  state={
    coordinates:[]
  }

    componentDidMount(){
        this.getAddresses();
        
        
       // this.getCoords(this.state.addresses);      
    };

    //loops through db call to get addresses then calls getcoords to get lat, lng values
    getAddresses = () => {

      API.getInfo().then(res =>{
        let addressArr = [];

        for(var i =0; i<res.data.length;i++){

          addressArr.push(res.data[i].address)
        }
        this.getCoords(addressArr)

      }).catch(err=>console.log(err))
    }

    //gets lat,lng values from geocode api
    getCoords = async(arr)=>{

    const longLatArr = await this.fetchAddress(arr);

    this.setState({coordinates:longLatArr}) 
                this.renderMap();
      //sets state to an array of pairs of lng/lat coordinates then calls render map
      
    };

    fetchAddress = async(arr) => {

      let longLatArr =[];

      for(var i=0;i<arr.length;i++){

        let res = await axios.get("https://maps.googleapis.com/maps/api/geocode/json",{
                params:{
                    address: arr[i],
                    key:"AIzaSyB6OceBab84YIQGM0OPCIH89IqydDBckr4"
                }
            })
            // .then((res) => {
                longLatArr.push({
                  latitude: res.data.results[0].geometry.location.lat,
                  longitude: res.data.results[0].geometry.location.lng
                })
        }  
        return longLatArr;
    }

    renderMap=()=>{
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyB6OceBab84YIQGM0OPCIH89IqydDBckr4&callback=initMap")
        window.initMap=this.initMap
    };

    //initializing map
     initMap = () => {
         const myMap = new window.google.maps.Map(document.getElementById('map'), 
         {
          center: {lat: 47.6062, lng: -122.3321},
          zoom: 8
        });

        //console.log("stateCoords: ",this.state.coordinates)

        this.state.coordinates.map(coordinate => {

          var marker = new window.google.maps.Marker({
            position: {lat: coordinate.latitude, lng: coordinate.longitude},
            map: myMap
          });
        })

        return myMap;
      };

    render (){
    return (
        <main>
        <div id="map"></div>
        </main>
    )
  }
}

function loadScript(url){
        var index = window.document.getElementsByTagName("script")[0]
        var script = window.document.createElement("script")

        script.src = url
        script.async=true;
        script.defer=true;
        index.parentNode.insertBefore(script,index)
    }


export default Map;

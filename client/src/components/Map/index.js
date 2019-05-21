import React, {Component} from "react";
import "./styles.css";
//import axios from "axios";

 var apiKey = process.env.GOOGLEAPI


class Map extends Component{

  state={
    openMarker: null
  }

    componentDidMount(){
        this.renderMap();
        //this.getCoords();
    };


    // getCoords = (addressArray)=>{

    //   for(var i=0; i<addressArray.length;i++){

    //     axios.get("https://maps.googleapis.com/maps/api/geocode/json",{
    //             params:{
    //                 address: addressArray[i],
    //                 key:"AIzaSyB6OceBab84YIQGM0OPCIH89IqydDBckr4"
    //             }
    //         })
    //         .then(function(response){
    //             console.log(response)
    //         })
    //         .catch(function(error){
    //             console.log(error)
    //         })
    //   }     
    // };

    renderMap=()=>{
        loadScript("https://maps.googleapis.com/maps/api/js?key="+apiKey+"callback=initMap")
        window.initMap=this.initMap
    };

    //initializing map
     initMap = () => {
         const map = new window.google.maps.Map(document.getElementById('map'), 
         {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
        
        //creating info window
        var infoWindow = new window.google.maps.InfoWindow({
          content: "Marker Created"
        })

        //creating marker
        var marker = new window.google.maps.Marker({
          position: {lat: -34.397, lng: 150.644},
          map: map,
          title: 'Hello World!'
        });

        //adding event listener for markers
        marker.addListener("click", () =>{
          infoWindow.open(map, marker)
          //this.setState({openMarker:true})
          console.log(this.state.openMarker)
        })

        marker.addListener("click", ()=>{
          console.log(this.state.openMarker)
            if(this.state.openMarker){
              infoWindow.close()
              this.setState({openMarker:false})
            }
          }
        )

        return map;
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

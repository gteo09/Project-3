import React, {Component} from "react";
import "./styles.css"


class Map extends Component{

    componentDidMount(){
        this.renderMap();
    };


    renderMap=()=>{
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyB6OceBab84YIQGM0OPCIH89IqydDBckr4&callback=initMap")
        window.initMap=this.initMap
    }

    //initializing map
     initMap = () => {
         const map = new window.google.maps.Map(document.getElementById('map'), 
         {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
        
        //creating marker
        var marker = new window.google.maps.Marker({
          position: {lat: -34.397, lng: 150.644},
          map: map,
          title: 'Hello World!'
        });

        //creating info window
        // var infoWindow = new window.google.maps.infoWindow({
        //   content: "Marker Created"
        // })

        //adding event listener for markers
        // marker.addListener("click", function(){
        //   infoWindow.open(map, marker)
        // })

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

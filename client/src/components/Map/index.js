import React, {Component} from "react";
import "./styles.css"


class Map extends Component{

    componentDidMount(){
        this.renderMap();
    }


    renderMap=()=>{
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyB6OceBab84YIQGM0OPCIH89IqydDBckr4&callback=initMap")
        window.initMap=this.initMap
    }

     initMap= () => {
         const map = new window.google.maps.Map(document.getElementById('map'), 
         {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
        return map;
      }

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

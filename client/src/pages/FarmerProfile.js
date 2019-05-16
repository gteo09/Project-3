import React, {Component} from "react";
import Map from "../components/Map";

class FarmProfile extends Component {

    state = {
        //empty object to be filled by api call to database
        profile: {}
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
            <div class = "container">
                <div class ="row">
                    <div class="col-sm">
                    <h1>"this.state.profile.name</h1>
                    <h1>"this.state.profile.image</h1>
                    <p>this.state.profile.contact</p>
                    </div>
                    <div class="col-sm">
                    Products Currently Available
                    </div>
                    <div class="col-sm">
                    where will this be
                    </div>
                </div>
            </div>
            <h1>random stuff</h1>
            <Map />
        </div>
        )
    }
}

export default FarmProfile;
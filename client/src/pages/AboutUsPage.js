import React, {Component} from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";

class AboutUsPage extends Component {

    state = {
        //empty object to be filled by api call to database
    }

    /*this function will grab data from api call and assign to this component's state
    to be accessed to populate the fields below */

// componentDidMount(){
//     API.getProfile(this.props.match.params.id)
//     .then(res=>this.setState({profile: res.data}))
//     .catch(err=>console.log(err))
// }

componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

render(){       
    return(
        <div>
            {/* <Navbar/> */}
            <AboutUs/>
        </div>
        )
    }
}

export default AboutUsPage;
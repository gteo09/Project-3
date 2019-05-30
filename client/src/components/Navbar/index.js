import React, {Component} from "react";
import "./Navbar.css";
import {BrowserRouter as Router, Route, NavLink, Link, Switch} from "react-router-dom";


class Navbar extends Component{
    constructor(){
        super();
        this.state={
            scrolled: false,
            };
        }

    componentDidMount(){
        window.addEventListener("scroll",()=>{
            const isTop=window.scrollY<0;
            if(isTop!==true){
                this.setState({scrolled:true})
            } else{
                this.setState({scrolled:false})
            }
        });
    }

    componentWillUnmount(){
        window.removeEventListener("scroll")
    }

    render(){
        return(
            <div className={this.state.scrolled ? "nav scrolled":"nav"} >
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top nav_text navprops" >
                <a className="navbar-brand" href="/home"><strong>FoodChain</strong></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item" id="navtext">
                        <NavLink to="/profiles/:id"><button className="btn btn-outline-primary link">Your Profile</button>
                        </NavLink>
                    </li>
                    <li className="nav-item" id="navtext">   
                        <Link to="/farmprofiles"><button className="btn btn-outline-primary link">Browse Farms </button>
                        </Link>   
                    </li>
                    <li className="nav-item" id="navtext">
                        <Link to="/savedfarms"><button className="btn btn-outline-primary link">Saved Farms</button>
                        </Link>    
                    </li>
                    <li className="nav-item" id="navtext">
                        <Link to="/aboutus"> <button className="btn btn-outline-primary link">About Us</button>
                        </Link>    
                    </li>
                    <li className="nav-item" id="navtext">   
                        <Link to="/logout"> <button className="btn btn-outline-primary link">Log Out</button>
                        </Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>

        )
    }
}


// const Navbar = () => {
//   return (
//     <div className="nav1">
//         <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
//             <a className="navbar-brand" href="/home"><strong>FoodChain</strong></a>
//             <div className="collapse navbar-collapse" id="navbar">
//                 <ul className="navbar-nav">
//                 <li className="nav-item" id="navtext">
//                     <NavLink to="/profiles/:id"><button className="btn btn-outline-primary">Your Profile</button>
//                     </NavLink>
//                 </li>
//                 <li className="nav-item" id="navtext">   
//                     <Link to="/farmprofiles"><button className="btn btn-outline-primary">Browse Farms </button>
//                     </Link>   
//                 </li>
//                 <li className="nav-item" id="navtext">
//                     <Link to="/savedfarms"><button className="btn btn-outline-primary">Saved Farms</button>
//                     </Link>    
//                 </li>
//                 <li className="nav-item" id="navtext">
//                     <Link to="/aboutus"> <button className="btn btn-outline-primary">About Us</button>
//                     </Link>    
//                 </li>
//                 <li className="nav-item" id="navtext">   
//                     <Link to="/logout"> <button className="btn btn-outline-primary">Log Out</button>
//                     </Link>
//                 </li>
//                 </ul>
//             </div>
//         </nav>
//     </div>
//     )
// }

export default Navbar;

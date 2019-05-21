import React from "react";
import "./Profile.css";


const Profile = () => (
    <div className="mainprofile">
        <form method="POST" action="/submit">
            Restaurant Name:
            <br/>
            <input type="text" name="name" placeholder="name"/>
            <br/>
            Type of Cuisine:
            <br/>
            <input type="text" name="cuisine" placeholder="cuisine"/>
            <br/>
            Description of Restaurant:
            <br/>
            <input type="text" name="description" placeholder="description"/>
            <br/>
            Address:
            <br/>
            <input type="text" name="address" placeholder="address"/>
            <br/>
            Phone Number:
            <br/>
            <input type="text" name="phoneNumber" placeholder="phoneNumber"/>
            <br/>
            Email:
            <br/>
            <input type="text" name="email" placeholder="email"/>
            <br/>
            <input type="submit" name="submit" placeholder="Submit"/>
        </form> 
    </div>
);

export default Profile;

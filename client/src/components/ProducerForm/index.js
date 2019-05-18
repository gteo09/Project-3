import React from "react";
import Navbar from "../Navbar/";

const ProducerForm = () =>{
    return(
        <div>
            <Navbar />
            <form>
                <div class="form-group">
                    <label for="inputAddress">Business Name</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Johnson Farms Inc."/>
                </div>
                <div class="form-group">
                    <label for="inputAddress2">Address </label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="1234 Main Street, Kirkland, WA 98034" />
                </div>
                <div class="form-group">
                    <label for="inputAddress">Values</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Brief description of business values, production philosophy etc.."/>
                </div>
                <div class="form-group">
                    <label for="inputAddress2">Image</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="hopefully a file upload" />
                </div>
                {/* Submits form info to database */}
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ProducerForm;

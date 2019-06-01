import React from "react";

const Home =()=>{
    return(
        <div>
            {/* <Navbar /> */}
            <div className="jumbotron jumbotron-fluid" >
            <h1 className="display-4 text-dark bg-light">Food Chain</h1>
                <p className="lead text-dark bg-light" id="jumbotext"> <strong>
                    
                Food Chain is an app created to connect restaurants to local farms to promote the use of locally grown ingredients within communities. With Food Chain, users (restaurants) will be able to browse what farms are currently participating in the area, the products the farms are currently growing, and browse producer profiles to find other businesses with similar values.</strong></p>
            
                <p className="lead text-dark bg-light createaccount">
                    <a href="/register"><strong>Click here to create an account!</strong></a>
                </p>
            </div>
            
        </div>
    </div>
    )
};

export default Home;

            // <div className="container" id="introduction">
            //     <div className="jumbotron jumbotron-fluid" >
            //         <div className="container">
            //             <h1 className="display-4">Food Chain</h1>
            //                 <p className="lead"> <strong>Food Chain is a marketplace created to connect local business to local farms to promote the use of locally grown ingredients within communities.
            //                 With Food Chain users will be able to browse what products local farms currently have, see when those farms are harvesting future products, and browse producer profiles to find other businesses with similar values.</strong>
            //                 </p>
            //         </div>
            //     </div>
            // </div>
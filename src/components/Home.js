import React from "react";
import '../components/Home.css'
import { Link } from 'react-router-dom'

function Home(){

    return(
        <React.Fragment>
            <div className="container-fluid">
                <div className="inner-cover">  
                    <img src="https://images.wallpaperscraft.com/image/single/laptop_keys_gradient_167934_1920x1080.jpg" alt="background-img"/>
                    <h3 className="cover-heading">Welcome to the Diversity Tech Page</h3>
                    <Link to='/login' className="btn btn-primary">Login</Link> 
                </div>                           
            </div>
        </React.Fragment>
    )
}
export default Home;
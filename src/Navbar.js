import {useState} from "react"
import {Link} from "react-router-dom"

const Navbar = ()=> {
    return (
           <div>
              <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Top Rated Neighborhoods</a></li>
                <li><a href="#">Best Eats</a></li>
                <li><a href="#">Top Rated Events</a></li>
              </ul>
            </div>
    )

}

export default Navbar
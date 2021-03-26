import react, { Component } from "react"
import { Link } from "react-router-dom"
import logo from "../../logo_ult_white.svg"
import "./navbar.css"

class Navbar extends Component {
    render() {
        return (
            <div id="navbar">
                <img src={logo} />
                <Link to="/home"> <b>Home</b></Link>
                <Link to="/about us"><b>about us</b></Link>
                <Link to="/contact"><b>contact</b></Link>
                <Link to="/sign up"><b>sign up</b></Link>
                {/* <div className="dropdown">
                    <button onclick="myFunction()" className="dropbtn">Dropdown</button>
                    <div id="myDropdown" className="dropdown-content show">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div> */}
            </div>
        )
    }
}


export default Navbar
import './signUp.css';
import React, { Component } from "react"
class SignUp extends Component {
    render() {
        return (
            <form className="sign_up" action="/action_page.php" style={{ border: '1px solid #ccc' }}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />
                    <label htmlFor="first name"><b>first name</b></label>
                    <input type="text" placeholder="Enter first name" name="first name" required />
                    <label htmlFor="last name"><b>last name</b></label>
                    <input type="text" placeholder="Enter last name" name="last name" required />
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />
                    <label htmlFor="confurm email"><b>confurm Email</b></label>
                    <input type="text" placeholder="Enter confurm Email" name="confurm email" required />
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                    <label htmlFor="photo"><b>Select a photo:</b></label>
                    <input type="file" name="photo" required />
                    <br />
                    <br />
                    
                    <div className="clearfix">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <button type="submit" className="signupbtn">Sign Up</button>
                    </div>
                </div>
            </form>
        );
    }

}

export default SignUp;

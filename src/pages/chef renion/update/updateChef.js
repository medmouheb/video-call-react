import React, { Component } from "react"
import "./updateChef.css"
class UpdateChef extends Component {
    render() {
        return (
            <div className="update_chef">
                <h2>l'update du chef projet de ID 1452978</h2>
                    <form action="">
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="fname">First Name</label>
                            </div>
                            <div className="col-75">
                                <input value="mouheb" type="text" id="fname" name="firstname" placeholder="name.." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label  htmlFor="lname">Last Name</label>
                            </div>
                            <div className="col-75">
                                <input value="othman" type="text" id="lname" name="lastname" placeholder="last name.." />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="address">address</label>
                            </div>
                            <div className="col-75">
                                <input value="7 rue 2546" type="text" id="address" name="address" placeholder="address.." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="Email">Email</label>
                            </div>
                            <div className="col-75">
                                <input value="a.m@g.co" type="text" id="Email" name="Email" placeholder="Email.." />
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="mobile">mobile</label>
                            </div>
                            <div className="col-75">
                                <input value="41 779 455" type="number" id="mobile" name="mobile" placeholder="mobile.." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="password">password</label>
                            </div>
                            <div className="col-75">
                                <input value="457896" type="text" id="password" name="password" placeholder="password.." />
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="title">title</label>
                            </div>
                            <div className="col-75">
                                <select id="title" name="title">
                                    <option value="chef deparetement">chef deparetement</option>
                                    <option value="cour">cour</option>
                                    <option value="td">td</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="subject">Subject</label>
                            </div>
                            <div className="col-75">
                                <textarea value="probabilité et statistique" id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }} defaultValue={""} />
                            </div>
                        </div>
                        <div className="submit_button">
                            <input type="submit" defaultValue="update" />
                        </div>
                    </form>
            </div>
        )
    }
}

export default UpdateChef
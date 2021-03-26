import React, { Component } from "react"
import "./creatChef.css"
class Creatchef extends Component {
    render() {
        return (
            <div className="creaction_chef">
                <h2>creation d'un chef projet</h2>
                    <form action="">
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="fname">First Name</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="fname" name="firstname" placeholder="name.." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="lname">Last Name</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="lname" name="lastname" placeholder="last name.." />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="address">address</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="address" name="address" placeholder="address.." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="Email">Email</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="Email" name="Email" placeholder="Email.." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="ConfurmEmail">Confurm Email</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="ConfurmEmail" name="ConfurmEmail" placeholder="ConfurmEmail.." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="mobile">mobile</label>
                            </div>
                            <div className="col-75">
                                <input type="number" id="mobile" name="mobile" placeholder="mobile.." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="password">password</label>
                            </div>
                            <div className="col-75">
                                <input type="password" id="password" name="password" placeholder="password.." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="confurm password">confurm password</label>
                            </div>
                            <div className="col-75">
                                <input type="password" id="confurm password" name="confurm password" placeholder="confurm password.." />
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
                                <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }} defaultValue={""} />
                            </div>
                        </div>
                        <div className="submit_button">
                            <input type="submit" defaultValue="Submit" />
                        </div>
                    </form>
            </div>
        )
    }
}

export default Creatchef
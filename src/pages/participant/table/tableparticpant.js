import './tableParticipant.css';
import React, { Component } from "react"
import logo from "../../../logo.svg"
class ParticipantTable extends Component {
    render() {
        return (
            <div className="participant_table">
                <table>
                    <tbody><tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>age</th>
                        <th>email</th>
                        <th>password</th>
                        <th>mobile</th>
                        <th>address</th>
                        <th>class</th>
                        <th>photo</th>
                        <th>action</th>
                    </tr>
                        <tr>
                            <td>M@G.COM</td>
                            <td>Smith</td>
                            <td>50</td>
                            <td>M@G.COM</td>
                            <td>145236</td>
                            <td>41779455</td>
                            <td>tunis</td>
                            <td>3emme</td>
                            <td><img src={logo}/></td>
                            <td className="action_buttons"><button className="edit_button">	&#x2710;</button><button className="delete_button">&#x1F5D1;</button></td>

                        </tr>
                        <tr>
                            <td>Eve</td>
                            <td>Jackson</td>
                            <td>94</td>
                            <td>M@G.COM</td>
                            <td>145236</td>
                            <td>41779455</td>
                            <td>tunis</td>
                            <td>3emme</td>
                            <td><img src={logo}/></td>
                            <td className="action_buttons"><button className="edit_button">	&#x2710;</button><button className="delete_button">&#x1F5D1;</button></td>

                        </tr>
                        <tr>
                            <td>Adam</td>
                            <td>Johnson</td>
                            <td>67</td>
                            <td>M@G.COM</td>
                            <td>145236</td>
                            <td>41779455</td>
                            <td>tunis</td>
                            <td>3emme</td>
                            <td><img src={logo}/></td>
                            <td className="action_buttons"><button className="edit_button">	&#x2710;</button><button className="delete_button">&#x1F5D1;</button></td>

                        </tr>
                    </tbody></table>
                <div className="pagination">
                    <a href="#">«</a>
                    <a href="#">1</a>
                    <a className="active" href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                    <a href="#">»</a>
                </div>
            </div>
        );
    }

}

export default ParticipantTable;

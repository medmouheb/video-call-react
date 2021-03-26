import './tableChef.css';
import React, { Component } from "react"

class ChefTable extends Component {
    render() {
        return (
            <div className="chef_table">
                <input className="add_button" type="button" value="ajoute chef projet" />
                <table>
                    <tbody><tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>age</th>
                        <th>email</th>
                        <th>password</th>
                        <th>mobile</th>
                        <th>title</th>
                        <th>subject</th>
                        <th>action</th>
                    </tr>
                        <tr>
                            <td>M@G.COM</td>
                            <td>Smith</td>
                            <td>50</td>
                            <td>M@G.COM</td>
                            <td>145236</td>
                            <td>41779455</td>
                            <td>COUR</td>
                            <td>MATH</td>
                            <td className="action_buttons"><button className="edit_button">	&#x2710;</button><button className="delete_button">&#x1F5D1;</button></td>

                        </tr>
                        <tr>
                            <td>Eve</td>
                            <td>Jackson</td>
                            <td>94</td>
                            <td>M@G.COM</td>
                            <td>145236</td>
                            <td>41779455</td>
                            <td>COUR</td>
                            <td>MATH</td>
                            <td className="action_buttons"><button className="edit_button">	&#x2710;</button><button className="delete_button">&#x1F5D1;</button></td>

                        </tr>
                        <tr>
                            <td>Adam</td>
                            <td>Johnson</td>
                            <td>67</td>
                            <td>M@G.COM</td>
                            <td>145236</td>
                            <td>41779455</td>
                            <td>COUR</td>
                            <td>MATH</td>
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

export default ChefTable;

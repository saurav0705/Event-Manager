import React from 'react';
import './RegistrationForm.scss';
import {FiUpload} from 'react-icons/fi';
const RegistrationForm = () => {
    const selectFile = () => {
        document.querySelector('.file').click();
    }
    return (
        <div className="register">
        <div className="heading">Event name</div>   
        <div className="form">
            <table>
                <tr>
                    <td><div className="label">name</div></td>
                    <td><div className="input">
                        <div className="box"><input type="text"/></div>
                        <div className="error"></div>
                        </div>
                    </td>    
                </tr>
                <tr>
                    <td><div className="label">email</div></td>
                    <td><div className="input">
                        <div className="box"><input type="text"/></div>
                        <div className="error"></div>
                        </div>
                    </td>    
                </tr>
                <tr>
                    <td><div className="label">mobile</div></td>
                    <td><div className="input">
                        <div className="box"><input type="text"/></div>
                        <div className="error"></div>
                        </div>
                    </td>    
                </tr>
                <tr>
                    <td><div className="label">Registration Type</div></td>
                    <td><div className="input">
                        <div className="box"><select id="cars">
                                            <option value="volvo">Self</option>
                                            <option value="saab">Group</option>
                                            <option value="mercedes">Corporate</option>
                                            <option value="audi">Others</option>
                                            </select>
                        </div>
                        <div className="error"></div>
                        </div>
                    </td>    
                </tr>
                <tr>
                    <td><div className="label">Number Of Tickets</div></td>
                    <td><div className="input">
                        <div className="box"><input type="text"/></div>
                        <div className="error"></div>
                        </div>
                    </td>    
                </tr>
                <tr>
                    <td><div className="label">Upload ID</div></td>
                    <td><div className="input">
                        <div className="box">
                            <input type="file" className="file" name="file" onChange={(event) => console.log(event.target.value)}/>
                            <label for="file" onClick={() => selectFile()}><FiUpload/> Upload ID</label>
                            </div>
                        <div className="error"></div>
                        </div>
                    </td>    
                </tr>
                <tr>
                    <td></td>
                    <td><button>Submit</button></td>
                </tr>
            </table>
        </div> 
            
                    
        </div>
    );
};

export default RegistrationForm;
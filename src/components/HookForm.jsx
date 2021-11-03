import React, { useState } from  'react';


const HookForm = (props) => {
    let [fname, setFname] = useState("");
    let [lname, setLname] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirm, setConfirm] = useState("");

    return(
        <>
            <form>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ (e) => setFname(e.target.value) } value={ fname } />
                    {
                        fname.length<2 && fname.length >0?
                        <p className= "text-danger">Field must be at least 2 characters</p>
                        : <p>  </p>
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ (e) => setLname(e.target.value) } value={ lname } />
                    {
                        lname.length<2 && lname.length >0?
                            <p className= "text-danger">Field must be at least 2 characters</p>
                            : <p>  </p>
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email }  />
                    {
                        email.length<5 && email.length >0?
                            <p className= "text-danger">Field must be at least 5 characters</p>
                            : <p>  </p>
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } value={ password } />
                    {
                        password.length<8 && password.length >0?
                            <p className= "text-danger">The passwords must match and be at least 8 characters.</p>
                            : <p>  </p>
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setConfirm(e.target.value) } value={ confirm } />
                    {
                        password == confirm ?
                            <p> </p>
                            : <p className= "text-danger">The passwords must match</p>
                    }
                </div>
            </form>

            <div>
                <p>First Name: {fname} </p>
                <p>Last Name: {lname} </p>
                <p>Email Address: {email} </p>
                <p>Password: {password} </p>
                <p>Confirm Password: {confirm} </p>
            </div>
        </>
    );
};

export default HookForm;
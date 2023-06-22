import React, {useState} from "react";
import validations from "../validations"

export default function Form ({login}) {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({

    }) 

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
        
        setErrors(validations({
            ...userData,
            [name]: value
        }))
    };

    const handleSubmit = (event)  => {
        event.preventDefault();
        login(userData);
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input 
                type="email" 
                name="email"
                value={userData.email}
                onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
                <br />
                <label htmlFor="password">Password:</label>
                <input 
                type="password" 
                name="password"
                value={userData.password}
                onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>} 

                <button type="submit">Log In</button>
            </form>
        </div>
    )
}
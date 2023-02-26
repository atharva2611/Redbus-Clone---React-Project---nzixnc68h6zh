import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import leftImg from "../image-folder/left-panel-img.jpeg"

export const SignUp = (props) => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        password: "",
    });

    const getdata = (e) => {

        const { value, name } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value,
            };
        });
    };

    const closeOverlay = () => {
        if (props.layOver === 2) {
            props.setLayOver(1);
        }
        navigate("/");
    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, password } = inpval;

        if (name === "") {
            alert("name field is required");
        } else if (email === "") {
            alert("email field is required");
        } else if (!email.includes("@")) {
            alert("email @ required");
        } else if (password === "") {
            alert("pass field is required");
        } else if (password.length < 5) {
            alert("password length is short");
        } else {
            localStorage.setItem("userData", JSON.stringify([...data, inpval]));
            navigate("/Login");
        }
    };

    return (
        <div className="signin-login-form">
            <span id="close-btn" onClick={closeOverlay}>×</span>
            <div className="left-panel">
                <img src={leftImg} alt="" />
            </div>
            <div id="main">
                <div id="child1">
                    <form>
                        <p id="s-page-title">Sign Up</p>
                        <label htmlFor="name" id="s-name-label">Name: </label>
                        <input
                            onChange={getdata} type="name" placeholder="Enter your name" id="s-name" name="name" /><br />
                        <label htmlFor="Email" id="s-email-label">Email: </label>
                        <input
                            onChange={getdata} type="email"
                            placeholder="Enter your email" id="s-email" name="email" /><br />
                        <label htmlFor="password" id="s-password-label">Password: </label>
                        <input
                            onChange={getdata} type="password"
                            placeholder="Enter your password" id="s-password" name="password" /><br /><br />
                        <button onClick={addData} type="submit" id="signup-btn">Sign Up</button><br />
                    </form>
                </div>
                <div id="child2">
                    <p id="alt-text-2">Already have an account? 
                        <button><NavLink to="/Login"> Log in</NavLink></button>
                    </p>
                    <p id="alt-text-3">By signing up, you agree to our
                        Terms & Conditions and Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}
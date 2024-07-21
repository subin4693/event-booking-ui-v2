import React, { useState } from "react";
// import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { Mail, User } from "lucide-react";

import TextInputBox from "./TextInputBox";
import PasswordInputBox from "./PasswordInputBox";
import { Link } from "react-router-dom";
// import Switch from "@mui/material/Switch";

import SocialmediaAuthBtn from "./SocialmediaAuthBtn";
import SelectInputBox from "./SelectInputBox";
import googlelogo from "../../assets/googleLogo.webp";
import fbLogo from "../../assets/fb.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
// import { useDispatch, useSelector } from "react-redux";
// import { setUser } from "../../features/userSlice";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const label = { inputProps: { "aria-label": "Switch demo" } };

    const handleSignin = async () => {
        // try {
        //     if (email.trim().length === 0 || password.trim().length === 0) {
        //         alert("Enter valid credentials");
        //         return;
        //     }
        //     if (password.trim().length < 8) {
        //         alert("Password length must be greater than 8");
        //         return;
        //     }
        //     const res = await axios.post(BASE_URL + "/login", {
        //         email,
        //         password,
        //         role,
        //     });
        //     if (res.data.data.role.toLowerCase() !== role.toLowerCase()) {
        //         alert("There is no user found in " + role);
        //         return;
        //     }
        //     dispatch(setUser(res.data.data));
        //     if (role.toLowerCase() == "user") {
        //         navigate("/user/events");
        //     } else {
        //         navigate("/client/");
        //     }
        // } catch (error) {
        //     console.log("Error occured");
        //     alert("Something wrong please try again later");
        //     console.log(error);
        // }
    };
    const handleAuthWithGoogle = () => {};
    const handleAuthWithFacebook = () => {};

    return (
        <div className="bg-gradient-to-l from-gray-600 via-gray-300 dark:from-ston-900 dark:via-gray-800 to-background min-h-screen flex items-center justify-center">
            <div className="flex w-[1000px] bg-gray-400 dark:bg-stone-900 rounded-[25px]  overflow-hidden flex-col md:flex-row">
                <div className="hidden md:flex w-1/2 overflow-hidden rounded-r-[25px]  ">
                    <img
                        src="https://previews.123rf.com/images/sentavio/sentavio1702/sentavio170200069/72686226-qatar-country-design-template-linear-flat-famous-historic-sight-cartoon-style-web-site-vector.jpg"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="w-full md:w-1/2 p-10 text-foreground bg-auth-bg">
                    <h2 className="text-xl font-bold ">Sign in</h2>
                    <br />
                    <div>
                        <TextInputBox
                            type="text"
                            placeholder="abc@gmail.com"
                            Icon={Mail}
                            value={email}
                            setValue={setEmail}
                        />
                        <br />
                        <PasswordInputBox
                            placeholder="password"
                            value={password}
                            setValue={setPassword}
                        />
                        <br />
                        <SelectInputBox
                            placeholder="Select role"
                            Icon={Mail}
                            value={role}
                            setValue={setRole}
                        />
                    </div>
                    <br />
                    {/* <div className="flex justify-between items-center">
                        <div className="flex   items-center ">
                            <Switch {...label} color="primary" />
                            Remember me
                        </div>
                        <Link to="#">Forget Password?</Link>
                    </div> */}
                    <br />

                    <div className="flex items-center flex-col">
                        <Button
                            onClick={handleSignin}
                            className={"max-w-fit px-20 mx-auto mb-8 "}
                        >
                            {"SIGN IN"}
                        </Button>

                        <p className="text-gray-600 mb-4">OR</p>

                        <SocialmediaAuthBtn
                            img={googlelogo}
                            handleClick={handleAuthWithGoogle}
                            text={"Login with Google"}
                        />

                        <SocialmediaAuthBtn
                            img={fbLogo}
                            handleClick={handleAuthWithFacebook}
                            text={"Login with Facebook"}
                        />
                        <p>
                            Don't have an account{" "}
                            <Link to="/signup" className="text-blue-500">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;

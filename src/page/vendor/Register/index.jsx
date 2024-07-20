import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import ClientInput from "@/components/ClientInput";
import ClientInputSelect from "@/components/ClientInputSelect";
import ClientTextArea from "@/components/ClientTextArea";
import { Button } from "@/components/ui/button";
import ClientInputImage from "@/components/ClientInputImage";
import { Calendar } from "@/components/ui/calendar";

// import axios from "axios";
// import { addItem } from "../../features/itemSlice";
import { useNavigate } from "react-router-dom";
import { DatePickerWithRange } from "@/components/DatePicker";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState("");
    const [contact, setContact] = useState("");
    const [role, setRole] = useState("");
    const [location, setLocation] = useState("");

    const [description, setDescription] = useState("");
    const [contactInfo, setContactInfo] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState(null);

    const BASE_URL = import.meta.env.VITE_BASE_URL;

    // const { client } = useSelector((state) => state.client);

    // const { user } = useSelector((state) => state.user);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    const handleSubmit = async () => {
        // console.log("*************7777777777777777777**********");
        // console.log(portfolio);
        // const data = new FormData();
        // data.append("images", image[0]);
        // data.append("typeId", role?._id);
        // data.append("clientId", client._id);
        // data.append("name", name);
        // data.append("description", description);
        // data.append("contactInfo", contactInfo);
        // data.append("price", price);
        // data.append("dates", client.availability);
        // if (role?.type === "Catering") {
        //     data.append("menuOptions", menuOptions);
        // } else if (role?.type === "Venue") {
        //     data.append("location", location);
        //     data.append("capacity", capacity);
        // } else if (role?.type === "Photography") {
        //     data.append("portfolio", portfolio);
        // } else if (role?.type === "Decoration") {
        //     decorationImages.forEach((image) =>
        //         data.append("decorationImages", image)
        //     );
        // }
        // console.log(data);
        // try {
        //     await axios
        //         .post(BASE_URL + "/items/create", data, {
        //             headers: {
        //                 "Content-Type": "multipart/form-data",
        //             },
        //         })
        //         .then((res) => {
        //             dispatch(addItem(res.data.newItem));
        //             console.log(res.data);
        //             navigate("/client/dashboard");
        //         })
        //         .catch((err) => console.log(err));
        // } catch (error) {
        //     console.error(error);
        // }
    };

    useEffect(() => {
        // console.log(client?.role?.type);
        // setRole(client?.role);
        // const getTypes = async () => {
        //   try {
        //     const res = await axios.get(BASE_URL + "/types");
        //     // console.log(res.data.types[0]);
        //     // console.log(client.role);
        //     const   = res.data.types.filter((type) => {
        //       console.log(type.type);
        //       console.log(client.role.type);
        //       return type.type.toLowerCase === client.role.type.toLowerCase;
        //     });
        //     console.log( );
        //     setRole( [0].type);
        //   } catch (error) {
        //     console.log(error);
        //   }
        // };
        // getTypes();
    }, []);
    // <ClientTextArea
    //                     title={"Description"}
    //                     value={description}
    //                     setValue={setDescription}
    //                 />

    return (
        <div className="  bg-card text-foreground   flex flex-col justify-center items-center ">
            <div className="flex w-full max-w-[1200px] gap-10">
                <div className="space-y-5 flex-1 ">
                    {/* //typid //clientid */}
                    {/* name */}
                    <ClientInput
                        title={"First Name"}
                        type={"text"}
                        value={firstName}
                        setValue={setFirstName}
                    />

                    <br />
                    <br />
                    <ClientInput
                        title={"Last Name"}
                        type={"text"}
                        value={lastName}
                        setValue={setLastName}
                    />
                    <br />
                    <br />
                    <ClientInput
                        title={"Email"}
                        type={"email"}
                        value={email}
                        setValue={setEmail}
                    />
                    <br />
                    <br />
                    {/* select */}
                    <ClientInputSelect
                        title={"Role"}
                        value={role}
                        setValue={setRole}
                    />
                    <br />
                    <br />
                    <ClientInput
                        title={"Work Experience"}
                        type={"number"}
                        value={experience}
                        setValue={setExperience}
                    />
                    {/* select */}
                    <br />
                    <br />
                    <ClientInputSelect
                        title={"Location"}
                        value={location}
                        setValue={setLocation}
                    />
                    <br />
                    <br />
                    <ClientInput
                        title={"Contact"}
                        type={"number"}
                        value={contact}
                        setValue={setContact}
                    />
                </div>
                <div className="space-y-5 flex-1 ">
                    <ClientInput
                        title={"QID"}
                        type={"text"}
                        value={firstName}
                        setValue={setFirstName}
                    />
                    <br />
                    <br />
                    <ClientInput
                        title={"QID"}
                        type={"text"}
                        value={firstName}
                        setValue={setFirstName}
                    />
                    <br />
                    <br />
                    <ClientInputImage
                        title={"Image"}
                        value={image}
                        setValue={setImage}
                    />
                    <br />
                    <br />
                    <ClientTextArea
                        title={"Description"}
                        value={description}
                        setValue={setDescription}
                    />
                    <br />
                    <br />
                    <DatePickerWithRange className=" bg-input rounded-[25px]  w-full shadow-custom" />
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <Button
                    styles="w-fit mx-auto px-10 py-[10px]"
                    handleClick={handleSubmit}
                >
                    Create
                </Button>
            </div>
        </div>
    );
};

export default Register;

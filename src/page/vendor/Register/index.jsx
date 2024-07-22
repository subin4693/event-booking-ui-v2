import React, { useEffect, useState } from "react";

import ClientInput from "@/components/ClientInput";
import ClientInputSelect from "@/components/ClientInputSelect";
import ClientTextArea from "@/components/ClientTextArea";
import { Button } from "@/components/ui/button";
import ClientInputImage from "@/components/ClientInputImage";
import { v4 as uuidv4 } from "uuid";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import { DatePickerWithRange } from "@/components/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { setClient } from "@/features/clientSlice";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState("");
    const [role, setRole] = useState("");
    const [contact, setContact] = useState("");
    const [qid, setQid] = useState("");
    const [crno, setCrno] = useState("");
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [date, setDate] = useState(new Date());
    const [tempDate, setTempDate] = useState(new Date());

    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { toast } = useToast();

    const handleSubmit = async () => {
        if (!image || image.length === 0) {
            toast({
                description: "There is no image provided",
                variant: "destructive",
            });

            return;
        }

        const file = image[0];
        const extension = file.name.split(".").pop();
        const newName = `${uuidv4()}.${extension}`;

        const newImage = new File([file], newName, { type: file.type });

        const data = new FormData();
        data.append("firstName", firstName);
        data.append("lastName", lastName);
        data.append("email", email);
        data.append("userId", user.id);
        data.append("role", role);
        data.append("workExperience", experience);
        data.append("location", location);
        data.append("contact", contact);
        data.append("qId", qid);
        data.append("crNo", crno);
        data.append("bestWork", newImage);
        data.append("description", description);

        date.forEach((d) => data.append("availability[]", d));

        try {
            setIsLoading(true);
            await axios.post(`${BASE_URL}/client`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            const res = await axios.get(BASE_URL + "/client/" + user.id);

            if (res.data.status == "success") {
                dispatch(setClient(res?.data.data.client));
                navigate("/vendor/dashboard");
            }

            navigate("/vendor/dashboard");
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        if (!tempDate.from || !tempDate.to) {
            return;
        }

        const fromDate = new Date(tempDate.from);
        const toDate = new Date(tempDate.to);

        function formatUTCISO(date) {
            return date.toISOString().split(".")[0] + "Z";
        }

        const dates = [];
        for (
            let dt = new Date(fromDate);
            dt <= toDate;
            dt.setDate(dt.getDate() + 1)
        ) {
            dates.push(formatUTCISO(new Date(dt)));
        }

        setDate(dates);
    }, [tempDate]);

    useEffect(() => {
        const getTypes = async () => {
            const res = await axios.get(BASE_URL + "/types");

            setOptions(res.data.types);
        };
        getTypes();
    }, []);

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
                        options={options}
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
                    {/* <br />
                    <br />
                    <ClientInputSelect
                     options={["User","Vendor"]}
                        title={"Location"}
                        value={location}
                        setValue={setLocation}
                    /> */}
                    <br />
                    <br />
                    <ClientInput
                        title={"Contact"}
                        type={"number"}
                        value={contact}
                        setValue={setContact}
                    />

                    <br />
                    <br />
                    <ClientTextArea
                        title={"Description"}
                        value={description}
                        setValue={setDescription}
                    />
                </div>

                <div className="space-y-5 flex-1 ">
                    <ClientInput
                        title={"QID"}
                        type={"text"}
                        value={qid}
                        setValue={setQid}
                    />
                    <br />
                    <br />
                    <ClientInput
                        title={"CRno"}
                        type={"text"}
                        value={crno}
                        setValue={setCrno}
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
                    <DatePickerWithRange
                        date={tempDate}
                        setDate={setTempDate}
                        className=" bg-input rounded-[25px]  w-full shadow-custom"
                    />
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <Button
                    className="w-fit mx-auto px-10 py-[10px]"
                    onClick={handleSubmit}
                >
                    {isLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        "Create"
                    )}
                </Button>
            </div>
        </div>
    );
};

export default Register;

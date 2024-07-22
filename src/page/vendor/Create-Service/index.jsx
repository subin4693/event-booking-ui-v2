import React, { useState } from "react";

import ClientInput from "@/components/ClientInput";
import ClientTextArea from "@/components/ClientTextArea";
import { Button } from "@/components/ui/button";
import ClientInputImage from "@/components/ClientInputImage";
import CatringService from "./CatringService";
import PhotographyService from "./PhotographyService";
import VenueService from "./VenueService";
import DecorationService from "./DecorationService";
import axios from "axios";
import { addItem } from "@/features/itemSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loader2 } from "lucide-react";

const ClientServices = () => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [contactInfo, setContactInfo] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState(null);

    //catring
    const [menuOptions, setMenuOptions] = useState([]);

    //photography
    const [portfolio, setPortfolio] = useState([]);

    //venu
    const [location, setLocation] = useState("");
    const [capacity, setCapacity] = useState(0);

    //decoration
    const [decorationImages, setDecorationImages] = useState([]);

    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const { client } = useSelector((state) => state.client);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(client);

    const handleSubmit = async () => {
        const data = new FormData();
        data.append("images", image[0]);
        data.append("typeId", client?.role?._id);
        data.append("clientId", client._id);
        data.append("name", name);
        data.append("description", description);
        data.append("contactInfo", contactInfo);
        data.append("price", price);
        data.append("dates", client.availability);
        if (client?.role?.type.toLowerCase() === "catering") {
            data.append("menuOptions", menuOptions);
        } else if (client?.role?.type.toLowerCase() === "venue") {
            data.append("location", location);
            data.append("capacity", capacity);
        } else if (client?.role?.type.toLowerCase() === "photograph") {
            data.append("portfolio", portfolio);
        } else if (client?.role?.type.toLowerCase() === "decoration") {
            decorationImages.forEach((image) =>
                data.append("decorationImages", image)
            );
        }

        try {
            setLoading(true);
            await axios
                .post(BASE_URL + "/items/create", data, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((res) => {
                    console.log(res.data.newItem);
                    dispatch(addItem(res.data.newItem));

                    navigate("/vendor/dashboard");
                })
                .catch((err) => console.log(err));
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="  bg-card text-foreground   flex flex-col justify-center items-center ">
            <div className="flex w-full max-w-[1200px] gap-10 flex-col lg:flex-row">
                <div className="space-y-5 flex-1 ">
                    {/* //typid //clientid */}
                    {/* name */}
                    <ClientInput
                        title={"Name"}
                        type={"text"}
                        value={name}
                        setValue={setName}
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
                    <ClientInput
                        title={"Contact info"}
                        type={"text"}
                        value={contactInfo}
                        setValue={setContactInfo}
                    />
                    <br />
                    <br />
                    <ClientInput
                        title={"Price"}
                        type={"number"}
                        value={price}
                        setValue={setPrice}
                    />
                    <br />
                    <br />
                    <ClientInputImage
                        title={"Image"}
                        value={image}
                        setValue={setImage}
                    />
                </div>
                <div className="space-y-5 flex-1 ">
                    {console.log(client)}
                    {client?.role?.type.toLowerCase() === "catering" && (
                        <CatringService
                            options={menuOptions}
                            setOptions={setMenuOptions}
                        />
                    )}
                    {client?.role?.type.toLowerCase() === "venue" && (
                        <VenueService
                            location={location}
                            setLocation={setLocation}
                            capacity={capacity}
                            setCapacity={setCapacity}
                        />
                    )}
                    {client?.role?.type.toLowerCase() === "photograph" && (
                        <PhotographyService
                            options={portfolio}
                            setOptions={setPortfolio}
                        />
                    )}
                    {client?.role?.type.toLowerCase() === "decoration" && (
                        <DecorationService
                            images={decorationImages}
                            setImages={setDecorationImages}
                        />
                    )}
                </div>
                {/* //description //images //price //contact info //dates */}
            </div>
            <div className="flex justify-center mt-10">
                <Button
                    className="w-fit mx-auto px-10 py-[10px]"
                    onClick={handleSubmit}
                >
                    {loading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        "Create"
                    )}
                </Button>
            </div>
        </div>
    );
};

export default ClientServices;

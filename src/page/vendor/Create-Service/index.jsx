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
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
import ClientInputImageEdit from "@/components/ClientInputImageEdit";
import DecorationServiceEdit from "./DecorationServiceEdit";
import { useToast } from "@/components/ui/use-toast";

const ClientServices = () => {
    const { toast } = useToast();
    const Location = useLocation();
    const ID = Location?.state?.itemId;
    const { items } = useSelector((state) => state.item);

    const editItem = items.find((item) => item._id === ID);

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState(editItem?.name || "");
    const [description, setDescription] = useState(editItem?.description || "");
    const [contactInfo, setContactInfo] = useState(editItem?.contactInfo || "");
    const [price, setPrice] = useState(editItem?.price || 0);
    const [image, setImage] = useState(null);

    //catring
    const [menuOptions, setMenuOptions] = useState(editItem?.menuOptions || []);

    //photography
    const [portfolio, setPortfolio] = useState(editItem?.portfolio || []);

    //venu
    const [location, setLocation] = useState(editItem?.location || "");
    const [capacity, setCapacity] = useState(editItem?.capacity || 0);

    //decoration
    const [decorationImages, setDecorationImages] = useState([]);
    const [newDecorationImages, setNewDecorationImages] = useState([]);

    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const { client } = useSelector((state) => state.client);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const imageData = image ? image[0] : editItem?.images[0]?.data;

        if (ID) {
            const formData = new FormData();
            if (name !== editItem.name) formData.append("name", name);
            if (description !== editItem.description)
                formData.append("description", description);
            if (contactInfo !== editItem.contactInfo)
                formData.append("contactInfo", contactInfo);
            if (price !== editItem.price) formData.append("price", price);
            if (imageData?.name) formData.append("images", imageData);

            if (client?.role?.type.toLowerCase() === "catering") {
                if (menuOptions.length !== editItem?.menuOptions.length) {
                    menuOptions.forEach((menu) =>
                        formData.append("menuOptions", menu)
                    );
                }
            } else if (client?.role?.type.toLowerCase() === "venue") {
                if (location !== editItem.location)
                    formData.append("location", location);
                if (capacity !== editItem.capacity)
                    formData.append("capacity", capacity);
            } else if (client?.role?.type.toLowerCase() === "photograph") {
                if (portfolio.length !== editItem?.portfolio.length) {
                    portfolio.forEach((port) =>
                        formData.append("portfolio", port)
                    );
                }
            } else if (client?.role?.type.toLowerCase() === "decoration") {
                if (newDecorationImages.length > 0) {
                    if (newDecorationImages.length === 3) {
                        newDecorationImages.forEach((image) =>
                            formData.append("decorationImages", image)
                        );
                    } else {
                        toast({
                            variant: "destructive",
                            title: "Edit all three images",
                        });
                        return;
                    }
                }
            }

            try {
                setLoading(true);
                await axios
                    .put(BASE_URL + "/items/edit/" + ID, formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    })
                    .then((res) => {
                        navigate("/vendor/dashboard");
                    })
                    .catch((err) => console.log(err));
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        } else {
            //create data

            const data = new FormData();
            data.append("images", imageData);
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
                        dispatch(addItem(res.data.newItem));

                        navigate("/vendor/dashboard");
                    })
                    .catch((err) => console.log(err));
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
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
                    {ID && editItem ? (
                        <ClientInputImageEdit
                            title={"Image"}
                            value={editItem?.images[0]?.data}
                            setValue={setImage}
                        />
                    ) : (
                        <ClientInputImage
                            title={"Image"}
                            value={image}
                            setValue={setImage}
                        />
                    )}
                </div>
                <div className="space-y-5 flex-1 ">
                    {/* {console.log(client)} */}
                    {client?.role?.type.toLowerCase() === "catering" && (
                        <CatringService
                            ID={ID}
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
                            ID={ID}
                            options={portfolio}
                            setOptions={setPortfolio}
                        />
                    )}
                    {client?.role?.type.toLowerCase() === "decoration" &&
                        (ID && editItem ? (
                            <DecorationServiceEdit
                                images={editItem?.decorationImages}
                                setImages={setDecorationImages}
                                newDecorationImages={newDecorationImages}
                                setNewDecorationImages={setNewDecorationImages}
                            />
                        ) : (
                            <DecorationService
                                images={decorationImages}
                                setImages={setDecorationImages}
                            />
                        ))}
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
                    ) : ID ? (
                        "Edit"
                    ) : (
                        "Create"
                    )}
                </Button>
            </div>
        </div>
    );
};

export default ClientServices;

import React, { useEffect, useState } from "react";
import Topbar from "./Topbar";
import ServiceCardContainer from "./ServiceCardContainer";
import { Button } from "@/components/ui/button";
import EventTitle from "./EventTitle";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateEvents = () => {
    const [services, setServices] = useState();
    const [selectedService, setSelectedService] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [showTitleField, setShowTitleField] = useState(true);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const [venue, setVenue] = useState("");
    const [catering, setCatering] = useState("");
    const [photograph, setPhotograph] = useState("");
    const [decoration, setDecoration] = useState("");

    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const [servicesList, setServicesList] = useState([]);

    const handleBookings = (serviceType, item) => {
        setBookings((prev) => [...prev, item._id]);

        if (serviceType?.type?.toLowerCase() == "venue")
            setVenue({
                id: item._id,
                clientId: item.clientId,
            });
        if (serviceType?.type?.toLowerCase() == "catering")
            setCatering({
                id: item._id,
                clientId: item.clientId,
            });
        if (serviceType?.type?.toLowerCase() == "photograph")
            setPhotograph({
                id: item._id,
                clientId: item.clientId,
            });
        if (serviceType?.type?.toLowerCase() == "decoration")
            setDecoration({
                id: item._id,
                clientId: item.clientId,
            });
    };

    const handleCreateEvent = async () => {
        try {
            const formData = new FormData();
            formData.append("userId", user.id);
            formData.append("name", title);
            formData.append("description", description);

            if (image) formData.append("images", image);

            formData.append("venue", JSON.stringify(venue));
            formData.append("catering", JSON.stringify(catering));
            formData.append("photograph", JSON.stringify(photograph));
            formData.append("decoration", JSON.stringify(decoration));

            const response = await axios
                .post(BASE_URL + "/events", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((res) => {
                    // dispatch(addItem(res.data.newItem));

                    navigate("/users/events");
                    return res;
                    // navigate("/vendor/dashboard");
                })
                .catch((err) => console.log(err));
        } catch (error) {
            console.error("Error creating event:", error);
        }
    };
    useEffect(() => {
        const getTypes = async () => {
            try {
                const res = await axios.get(BASE_URL + "/types");
                const data = await axios.get(BASE_URL + "/items");

                setServicesList(data.data.items);
                setServices(res.data.types);

                setSelectedService(res.data.types[0]);
                // setSelectedService({ _id: 2, type: "df" });
            } catch (error) {
                console.log(error);
            }
        };
        getTypes();
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-between ">
            {showTitleField && (
                <EventTitle
                    setShowTitleField={setShowTitleField}
                    title={title}
                    setTitle={setTitle}
                    description={description}
                    setDescription={setDescription}
                    image={image}
                    setImage={setImage}
                />
            )}
            <Topbar
                services={services}
                setSelectedService={setSelectedService}
            />

            <div className="flex-grow">
                <ServiceCardContainer
                    selectedService={selectedService}
                    servicesList={servicesList}
                    handleBookings={handleBookings}
                    bookings={bookings}
                />
            </div>
            {bookings?.length > 0 && (
                <div className="sticky bottom-0 flex justify-center backdrop-blur  z-50 p-4">
                    <Button
                        className="px-4 py-2 text-white rounded"
                        onClick={handleCreateEvent}
                    >
                        {bookings.length} Book now
                    </Button>
                </div>
            )}
        </div>
    );
};

export default CreateEvents;

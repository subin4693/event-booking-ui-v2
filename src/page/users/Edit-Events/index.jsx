import React, { useEffect, useState } from "react";
import Topbar from "./Topbar";
import ServiceCardContainer from "./ServiceCardContainer";
import { Button } from "@/components/ui/button";
import EventTitle from "./EventTitle";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Delete, Trash, Trash2 } from "lucide-react";

const EditEvents = () => {
    const [services, setServices] = useState();
    const [selectedService, setSelectedService] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [showTitleField, setShowTitleField] = useState(true);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const [venue, setVenue] = useState({});
    const [catering, setCatering] = useState({});
    const [photograph, setPhotograph] = useState({});
    const [decoration, setDecoration] = useState({});

    const [date, setDate] = useState();
    const [tempDate, setTempDate] = useState(new Date());

    const params = useParams();
    const eventId = params.eventId;

    const deleteField = async () => {
        let field = selectedService.type.toLowerCase();
        try {
            await axios.put(BASE_URL + "/events/edit/" + eventId + "/" + field);
            navigate("/users/profile");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!tempDate.from || !tempDate.to) {
            return;
        }

        // Create a new Date object from the input, setting the time to midnight in UTC
        function normalizeToUTC(date) {
            const utcDate = new Date(
                Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
            );
            return utcDate;
        }
        const fromDate = normalizeToUTC(new Date(tempDate.from));
        const toDate = normalizeToUTC(new Date(tempDate.to));

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

    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const [servicesList, setServicesList] = useState([]);

    const handleBookings = (serviceType, item) => {
        let isRemove = false;
        setBookings((prev) => {
            if (prev.includes(item._id)) {
                let newPrev = prev.filter((book) => book != item._id);
                isRemove = true;
                return newPrev;
            } else {
                isRemove = false;

                return [...prev, item._id];
            }
        });

        if (serviceType?.type?.toLowerCase() == "venue") {
            if (isRemove) setVenue({});
            else
                setVenue({
                    id: item._id,
                    clientId: item.clientId,
                });
        }
        if (serviceType?.type?.toLowerCase() == "catering") {
            if (isRemove) setCatering({});
            else
                setCatering({
                    id: item._id,
                    clientId: item.clientId,
                });
        }
        if (serviceType?.type?.toLowerCase() == "photograph") {
            if (isRemove) setPhotograph({});
            else
                setPhotograph({
                    id: item._id,
                    clientId: item.clientId,
                });
        }
        if (serviceType?.type?.toLowerCase() == "decoration") {
            if (isRemove) setDecoration({});
            else
                setDecoration({
                    id: item._id,
                    clientId: item.clientId,
                });
        }
    };

    const handleCreateEvent = async () => {
        try {
            console.log("date");
            console.log(date);
            const data = {
                userId: user.id,
                name: title,
                description: description,
                venue: venue,
                catering: catering,
                photograph: photograph,
                decoration: decoration,
            };
            if (date?.length != 0) data.date = date;
            data.venue = JSON.stringify(data.venue);
            data.catering = JSON.stringify(data.catering);
            data.photograph = JSON.stringify(data.photograph);
            data.decoration = JSON.stringify(data.decoration);

            // date.forEach((d) => formData.append("dates[]", d));
            console.log(data);

            const response = await axios
                .put(BASE_URL + "/events/edit/" + eventId, data, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((res) => {
                    navigate("/users/profile");
                    return res;
                })
                .catch((err) => console.log(err));
        } catch (error) {
            console.error("Error creating event:", error);
        }
    };
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(
                    BASE_URL + "/events/single-event/" + eventId
                );
                const ress = await axios.get(BASE_URL + "/types");
                const data = await axios.get(BASE_URL + "/items");

                setServicesList(data.data.items);
                setServices(ress.data.types);

                setSelectedService(ress.data.types[0]);

                let {
                    photograph,
                    venue,
                    decoration,
                    catering,
                    event,
                    event: images,
                } = res.data.data;

                setTitle(event?.details?.name);

                setImage(images.images);
                setDescription(event?.details?.description);
                setBookings([
                    venue?.details?._id,
                    photograph?.details?._id,
                    decoration?.details?._id,
                    catering?.details?._id,
                ]);

                setVenue({
                    id: venue?.details?._id,
                    clientId: venue?.details?.clientId,
                });
                setCatering({
                    id: catering?.details?._id,
                    clientId: catering?.details?.clientId,
                });
                setPhotograph({
                    id: photograph?.details?._id,
                    clientId: photograph?.details?.clientId,
                });
                setDecoration({
                    id: decoration?.details?._id,
                    clientId: decoration?.details?.clientId,
                });
            } catch (error) {
                console.log(error);
            }
        };
        getData();
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
                    date={tempDate}
                    setDate={setTempDate}
                />
            )}
            <Topbar
                services={services}
                setSelectedService={setSelectedService}
            />
            <div className="flex justify-end">
                <Button
                    className="mt-10 lg:mt-5"
                    variant={"destructive"}
                    onClick={deleteField}
                    size={"icon"}
                >
                    <Trash2 />
                </Button>
            </div>

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
                        {bookings.length} Update
                    </Button>
                </div>
            )}
        </div>
    );
};

export default EditEvents;
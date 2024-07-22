import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

const Events = () => {
    const [event, setEvent] = useState("Current Events");
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    // const events = [
    //     {
    //         _id: "sdafa",
    //         image: "https://github.com/shadcn.png",
    //         title: "Event title",
    //         date: "2024-07-30",
    //         location: "location of the event",
    //     },
    //     {
    //         _id: "sdasadfafa",
    //         image: "https://github.com/shadcn.png",
    //         title: "Event title",
    //         date: "2024-07-30",
    //         location: "location of the event",
    //     },
    //     {
    //         _id: "sdaasdfafa",
    //         image: "https://github.com/shadcn.png",
    //         title: "Event title",
    //         date: "2024-07-30",
    //         location: "location of the event",
    //     },
    //     {
    //         _id: "sdadfasfa",
    //         image: "https://github.com/shadcn.png",
    //         title: "Event title",
    //         date: "2024-07-30",
    //         location: "location of the event",
    //     },
    //     {
    //         _id: "sdafa2",
    //         image: "https://github.com/shadcn.png",
    //         title: "Event title",
    //         date: "2024-07-30",
    //         location: "location of the event",
    //     },
    // ];
    useEffect(() => {
        const getEvents = async () => {
            try {
                setLoading(true);

                const res = await axios.get(BASE_URL + "/events");

                setEvents(res.data.events);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getEvents();
    }, []);
    return (
        <div>
            <div className="flex flex-col sm:flex-row  items-center space-y-4 sm:space-y-0">
                <div className="flex-1">
                    <h1 className="font-bold text-lg text-center sm:text-left">
                        {event}
                    </h1>
                </div>
                <div className="flex mr-5  relative w-full sm:w-[300px] bg-secondary rounded-3xl overflow-hidden border">
                    <span
                        className={`absolute w-1/2 h-full duration-500 p-3 bg-primary   rounded-3xl text-center ${
                            event === "Current Events"
                                ? "-translate-x-0"
                                : "translate-x-full"
                        }`}
                    />
                    <button
                        onClick={() => setEvent("Current Events")}
                        className={`flex-1 p-3 text-center z-10 duration-500 ${
                            event === "Current Events"
                                ? "text-white"
                                : "text-black dark:text-white"
                        }`}
                    >
                        Current Events
                    </button>
                    <button
                        onClick={() => setEvent("Past Events")}
                        className={`flex-1 p-3 text-center z-10 duration-500 ${
                            event !== "Current Events"
                                ? "text-white"
                                : "text-black dark:text-white"
                        }`}
                    >
                        Past Events
                    </button>
                </div>
                <Button variant="secondary" size="icon" asChild>
                    <Link to="/users/create-event">
                        <Plus />
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-10">
                {events &&
                    events.map(({ item, image }) => {
                        console.log(events);
                        return (
                            <EventCard
                                key={item && item?._id}
                                id={item && item?._id}
                                image={image && image}
                                title={item && item?.name}
                                date={""}
                                location={""}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default Events;

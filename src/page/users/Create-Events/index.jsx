import React, { useEffect, useState } from "react";
import Topbar from "./Topbar";
import ServiceCardContainer from "./ServiceCardContainer";
import { Button } from "@/components/ui/button";

const CreateEvents = () => {
    const [services, setServices] = useState();
    const [selectedService, setSelectedService] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [servicesList, setServicesList] = useState([
        {
            _id: "sdafa",
            image: "https://github.com/shadcn.png",
            title: "Event title",
            date: "2024-07-30",
            location: "location of the event",
            decription: "description about ouer service",
            price: 50,
        },
        {
            _id: "sdasdfafa",
            image: "https://github.com/shadcn.png",
            title: "Event title",
            date: "2024-07-30",
            location: "location of the event",
            decription: "description about ouer service",
            price: 50,
        },
        {
            _id: "sd342afa",
            image: "https://github.com/shadcn.png",
            title: "Event title",
            date: "2024-07-30",
            location: "location of the event",
            decription: "description about ouer service",
            price: 50,
        },
        {
            _id: "sgfdsdafa",
            image: "https://github.com/shadcn.png",
            title: "Event title",
            date: "2024-07-30",
            location: "location of the event",
            decription: "description about ouer service",
            price: 50,
        },
        {
            _id: "sgfdsdaluiouifa",
            image: "https://github.com/shadcn.png",
            title: "Event title",
            date: "2024-07-30",
            location: "location of the event",
            decription: "description about ouer service",
            price: 50,
        },
        {
            _id: "sgfd342sdafa",
            image: "https://github.com/shadcn.png",
            title: "Event title",
            date: "2024-07-30",
            location: "location of the event",
            decription: "description about ouer service",
            price: 50,
        },
        {
            _id: "sgfdjhkhsdafa",
            image: "https://github.com/shadcn.png",
            title: "Event title",
            date: "2024-07-30",
            location: "location of the event",
            decription: "description about ouer service",
            price: 50,
        },
        {
            _id: "sdafa",
            image: "https://github.com/shadcn.png",
            title: "Event title",
            date: "2024-07-30",
            location: "location of the event",
            decription: "description about ouer service",
            price: 50,
        },
        {
            _id: "sdasdfafa",
            image: "https://github.com/shadcn.png",
            title: "Event title",
            date: "2024-07-30",
            location: "location of the event",
            decription: "description about ouer service",
            price: 50,
        },
        {
            _id: "sd342afa",
            image: "https://github.com/shadcn.png",
            title: "Event title",
            date: "2024-07-30",
            location: "location of the event",
            decription: "description about ouer service",
            price: 50,
        },
        {
            _id: "sgfdsdafa",
            image: "https://github.com/shadcn.png",
            title: "Event title",
            date: "2024-07-30",
            location: "location of the event",
            decription: "description about ouer service",
            price: 50,
        },
        {
            _id: "sgfdsdaluiouifa",
            image: "https://github.com/shadcn.png",
            title: "Event title",
            date: "2024-07-30",
            location: "location of the event",
            decription: "description about ouer service",
            price: 50,
        },
        {
            _id: "sgfd342sdafa",
            image: "https://github.com/shadcn.png",
            title: "Event title",
            date: "2024-07-30",
            location: "location of the event",
            decription: "description about ouer service",
            price: 50,
        },
        {
            _id: "sgfdjhkhsdafa",
            image: "https://github.com/shadcn.png",
            title: "Event title",
            date: "2024-07-30",
            location: "location of the event",
            decription: "description about ouer service",
            price: 50,
        },
        {
            _id: "sdafa",
            image: "https://github.com/shadcn.png",
            title: "Event title",
            date: "2024-07-30",
            location: "location of the event",
            decription: "description about ouer service",
            price: 50,
        },
        {
            _id: "sdasdfafa",
            image: "https://github.com/shadcn.png",
            title: "Event title",
            date: "2024-07-30",
            location: "location of the event",
            decription: "description about ouer service",
            price: 50,
        },
        {
            _id: "sd342afa",
            image: "https://github.com/shadcn.png",
            title: "Event title",
            date: "2024-07-30",
            location: "location of the event",
            decription: "description about ouer service",
            price: 50,
        },
        {
            _id: "sgfdsdafa",
            image: "https://github.com/shadcn.png",
            title: "Event title",
            date: "2024-07-30",
            location: "location of the event",
            decription: "description about ouer service",
            price: 50,
        },
        {
            _id: "sgfdsdaluiouifa",
            image: "https://github.com/shadcn.png",
            title: "Event title",
            date: "2024-07-30",
            location: "location of the event",
            decription: "description about ouer service",
            price: 50,
        },
        {
            _id: "sgfd342sdafa",
            image: "https://github.com/shadcn.png",
            title: "Event title",
            date: "2024-07-30",
            location: "location of the event",
            decription: "description about ouer service",
            price: 50,
        },
        {
            _id: "sgfdjhkhsdafa",
            image: "https://github.com/shadcn.png",
            title: "Event title",
            date: "2024-07-30",
            location: "location of the event",
            decription: "description about ouer service",
            price: 50,
        },
    ]);

    const handleBookings = (service) => {
        setBookings((prev) => [...prev, service]);
    };

    useEffect(() => {
        console.log(selectedService);
    }, [selectedService]);

    useEffect(() => {
        const data = [
            {
                _id: "venue01",
                type: "Venue",
            },
            {
                _id: "Decoration02",
                type: "Decoration",
            },
            {
                _id: "Photography03",
                type: "Photography",
            },
            {
                _id: "Catering04",
                type: "Catering",
            },
        ];
        setServices(data);
        //get all services from database then save all of the datas to redux .
        setSelectedService(data[0]);
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Topbar
                services={services}
                setSelectedService={setSelectedService}
            />

            <div className="flex-grow">
                <ServiceCardContainer
                    servicesList={servicesList}
                    handleBookings={handleBookings}
                    bookings={bookings}
                />
            </div>
            {bookings?.length > 0 && (
                <div className="sticky bottom-0 flex justify-center backdrop-blur  z-50 p-4">
                    <Button className="px-4 py-2 text-white rounded">
                        {bookings.length} Book now
                    </Button>
                </div>
            )}
        </div>
    );
};

export default CreateEvents;

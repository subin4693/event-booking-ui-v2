import React, { useEffect, useState } from "react";
import Topbar from "./Topbar";
import ServiceCard from "./ServiceCard";
import { useSelector } from "react-redux";
import axios from "axios";

const Dashboard = () => {
    const [selectedService, setSelectedService] = useState("Upcoming");
    const { user } = useSelector((state) => state.user);
    const [loading, setLoading] = useState(false);

    const [cancelLoading, setCancelLoading] = useState(false);

    const [publishLoading, setPublishLoading] = useState(false);
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const [data, setData] = useState({});
    // const [data, setData] = useState({
    //     Upcoming: [
    //         {
    //             title: "name of the event",
    //             status: "Rejected",
    //             mail: "asdf@gmail.com",
    //             contact: "contact of our service",
    //         },

    //     ],

    //     Past: [
    //         {
    //             title: "name of the event",
    //             status: "Rejected",
    //             mail: "asdf@gmail.com",
    //             contact: "contact of our service",
    //         },

    // });

    const handleConfirm = async (eventId) => {
        try {
            setPublishLoading(true);
            const res = await axios.post(
                BASE_URL + "/events/publish/" + eventId
            );

            setData({ Upcoming: res.data.events });
        } catch (error) {
            console.log(error);
        } finally {
            setPublishLoading(false);
        }
    };
    const handleCancel = async (eventId) => {
        try {
            setCancelLoading(true);
            const res = await axios.post(
                BASE_URL + "/events/publish/cancel/" + eventId
            );

            setData({ Upcoming: res.data.events });
        } catch (error) {
            console.log(error);
        } finally {
            setCancelLoading(false);
        }
    };

    useEffect(() => {
        const getEvents = async () => {
            try {
                setLoading(true);

                const res = await axios.get(BASE_URL + "/events/" + user.id);
                setData({ Upcoming: res.data.events });
                console.log(res.data.events);
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
            <div className="flex gap-10 flex-col md:flex-row">
                <div className="   rounded-[25px]   overflow-hidden border  group shadow-custom h-[300px] w-[300px]">
                    <div className="relative">
                        <img
                            src="https://github.com/shadcn.png"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div
                            className={`absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition duration-300`}
                        ></div>
                    </div>
                </div>
                <div className="font-bold text-xl space-y-5">
                    <h2>
                        Name :<span className="ml-4 ">{user?.name}</span>
                    </h2>
                    <h2>
                        Email :<span className="ml-4">{user?.email}</span>
                    </h2>
                    <h2>
                        Contact :<span className="ml-4">{user?.role}</span>
                    </h2>
                </div>
            </div>
            <div className="mt-10">
                <Topbar
                    events={["Upcoming", "Past"]}
                    setSelectedService={setSelectedService}
                />
            </div>
            <div className=" flex justify-center md:justify-between flex-wrap gap-5">
                {data &&
                    data[selectedService]?.map((singleData) => {
                        console.log(singleData);
                        return (
                            <ServiceCard
                                cancelLoading={cancelLoading}
                                setPublishLoading={setPublishLoading}
                                publishLoading={publishLoading}
                                handleConfirm={handleConfirm}
                                handleCancel={handleCancel}
                                key={singleData.item._id}
                                eventId={singleData && singleData.item._id}
                                image={singleData && singleData?.image}
                                title={singleData && singleData?.item?.name}
                                isPublished={
                                    singleData && singleData?.item?.isPublished
                                }
                                status={singleData && singleData?.item?.status}
                                description={
                                    singleData && singleData?.item?.description
                                }
                                mail={singleData.mail}
                                selectedService={selectedService}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default Dashboard;

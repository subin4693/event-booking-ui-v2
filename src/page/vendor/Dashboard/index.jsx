import { Button } from "@/components/ui/button";
import React from "react";
import EventBox from "./EventBox";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Vendor details : </h1>
                <Link to="/vendor/create-services">
                    <Button>Add Service</Button>
                </Link>
            </div>
            <br />
            <div>
                <h2 className="text-2xl font-bold">Organizing Events</h2>
                <br />
                <h3 className="text-xl font-bold">Pendin tasks</h3>
                <br />
                <div className=" flex justify-center md:justify-between flex-wrap gap-5">
                    <EventBox
                        number={10}
                        text={"Done"}
                        colors={"bg-red-500 dark:bg-red-800"}
                    />
                    <EventBox
                        number={10}
                        text={"In Progress"}
                        colors={"bg-pink-500 dark:bg-pink-800"}
                    />
                    <EventBox
                        number={10}
                        text={"Waiting for  Review"}
                        colors={"bg-purple-500 dark:bg-purple-800"}
                    />
                    <EventBox
                        number={10}
                        text={"Ongoing"}
                        colors={"bg-blue-500 dark:bg-blue-800"}
                    />
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-2xl font-bold">Current Event</h2>
                <div className="bg-primary w-[400px] mt-5 rounded-lg py-2 pl-5 pr-10 text-white">
                    <h3 className="font-bold">Personal Wedding Event</h3>
                    <h4>Saber & Oro</h4>
                    <div className="flex  justify-between items-center">
                        <div className="w-9 mt-2 h-9 rounded-full overflow-hidden">
                            <img
                                src="https://github.com/shadcn.png"
                                className="w-full h-full object-cover"
                                alt="profile"
                            />
                        </div>
                        <span>Now</span>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-2xl font-bold">Service Details</h2>
                <br />
                <div className="flex flex-wrap justify-center gap-5">
                    <ServiceCard
                        name={"Venue"}
                        description={"description asdfas"}
                        contact={"23432423"}
                        locatoin={"lcoaidsfasi"}
                    />

                    <ServiceCard
                        name={"Venue"}
                        description={"description asdfas"}
                        contact={"23432423"}
                        locatoin={"lcoaidsfasi"}
                    />
                    <ServiceCard
                        name={"Venue"}
                        description={"description asdfas"}
                        contact={"23432423"}
                        locatoin={"lcoaidsfasi"}
                    />
                    <ServiceCard
                        name={"Venue"}
                        description={"description asdfas"}
                        contact={"23432423"}
                        location={"lcoaidsfasi"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

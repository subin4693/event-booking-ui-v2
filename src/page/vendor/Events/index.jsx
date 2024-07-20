import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Events = () => {
    const [event, setEvent] = useState("Current Events");
    return (
        <div className="">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-bold text-lg">Upcomming events</h1>
                </div>
                <div className="flex relative w-[300px] bg-secondary rounded-3xl overflow-hidden border ">
                    <span
                        className={`absolute w-1/2 h-full duration-500 p-3 bg-primary text-white rounded-3xl text-center ${
                            event === "Current Events"
                                ? "-translate-x-0"
                                : "translate-x-full"
                        }`}
                    />

                    <button
                        onClick={() => setEvent("Current Events")}
                        className={`flex-1 p-3 rounded-3xl text-center z-10 duration-500 ${
                            event === "Current Events" && "text-white"
                        }`}
                    >
                        Current Events
                    </button>
                    <button
                        onClick={() => setEvent("Past Events")}
                        className={`flex-1 p-3 rounded-3xl text-center z-10 duration-500 ${
                            event !== "Current Events" && "text-white"
                        }`}
                    >
                        Past Events
                    </button>
                </div>
            </div>
            <div className="flex mt-10">
                <Card className="w-[350px] overflow-hidden pt-5 bg-muted">
                    <CardContent>
                        <div className="w-full h-[200px] overflow-hidden rounded-lg mb-4">
                            <img
                                src="https://github.com/shadcn.png"
                                className="w-full h-full object-coveer"
                            />
                        </div>
                        <p>Title : Event1</p>
                        <p>Booked by : demo</p>
                        <p>Contact : 343242</p>
                        <p>Mail : demo@gmail.com</p>
                        <p>Status : Booked</p>
                        <br />
                        <Button variant="destructive">X Cancel</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Button>Confirm</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Events;

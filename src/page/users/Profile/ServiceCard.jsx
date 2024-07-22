import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EventCard = ({
    image,
    title,
    status,
    description,
    mail,
    selectedService,
}) => {
    return (
        <div className="flex mt-10">
            <Card className="w-[350px] overflow-hidden pt-5 bg-muted">
                <CardContent>
                    <div className="   rounded-[25px]   overflow-hidden border  group shadow-custom  w-[300px]">
                        <div className="relative">
                            <img
                                src={`data:image/png;base64,${
                                    image && image[0]?.data
                                }`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div
                                className={`absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition duration-300`}
                            ></div>
                        </div>
                    </div>

                    <p>Title : {title}</p>
                    <p>Description : {description}</p>
                    <p>Mail : {mail}</p>
                    <p>Status : {status}</p>
                    <br />
                    {selectedService !== "Past" && (
                        <>
                            <Button variant="destructive">X Cancel</Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            {status ? (
                                <Button>
                                    <Link to="/users/create-event">
                                        Book new
                                    </Link>
                                </Button>
                            ) : (
                                <Button>Publish</Button>
                            )}
                        </>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default EventCard;

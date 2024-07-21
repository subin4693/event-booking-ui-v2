import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EventCard = ({
    image,
    title,
    status,
    contact,
    mail,
    selectedService,
}) => {
    return (
        <div className="flex mt-10">
            <Card className="w-[350px] overflow-hidden pt-5 bg-muted">
                <CardContent>
                    <div className="w-full h-[250px]  overflow-hidden rounded-lg mb-4">
                        <img
                            src="https://github.com/shadcn.png"
                            className="w-full h-full object-coveer"
                        />
                    </div>
                    <p>Title : {title}</p>
                    <p>Contact : {contact}</p>
                    <p>Mail : {mail}</p>
                    <p>Status : {status}</p>
                    <br />
                    {selectedService !== "Past" && (
                        <>
                            <Button variant="destructive">X Cancel</Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            {status.toLowerCase() === "rejected" ? (
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

import React from "react";
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ServiceDetails = ({ singleService, handleBookings }) => {
    return (
        <DialogContent className="mx -5">
            <div className=" sm:flex w-full gap-10 flex-wrap">
                <div className="flex-1  overflow-hidden rounded-xl">
                    <img
                        src={singleService?.image}
                        alt="image"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 flex flex-col">
                    <DialogHeader className="h-[90%]  ">
                        <DialogTitle>Name : {singleService?.title}</DialogTitle>
                        <DialogDescription className="text-justify  text-lg ">
                            {singleService?.description && (
                                <>Description : {singleService?.description}</>
                            )}
                            {singleService?.price && (
                                <>Cost : {singleService?.price}</>
                            )}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-4  ">
                        <DialogClose asChild>
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={() =>
                                    handleBookings(singleService._id)
                                }
                            >
                                Book
                            </Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Close
                            </Button>
                        </DialogClose>
                    </div>
                </div>
            </div>
        </DialogContent>
    );
};

export default ServiceDetails;

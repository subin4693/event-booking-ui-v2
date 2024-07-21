import React from "react";
import { Card } from "@/components/ui/card";
import { Pen, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceCard = ({ name, description, price, contact, image,handleDelete,id }) => {
    return (
        <Card className="flex p-3 w-fit relative group">
            <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
                <img
                    src={`data:image/png;base64,${image}`}
                    className="w-full h-full object-coveer"
                />
            </div>
            <div className="px-3 ml-6 flex flex-col">
                <div className="flex-1 justify-center">
                    <p>Title : {name}</p>
                    <p>Description : {description}</p>
                    <p>Price : {price}</p>
                    <p>Contact : {contact}</p>
                </div>
                <div className="mt-10  flex flex-end absolute right-5 bottom-5 opacity-0 delay-50 duration-100 group-hover:opacity-100">
                    <Button variant="outline" size="icon">
                        <Pen />
                    </Button>{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="destructive" size="icon" onClick={()=>handleDelete(id)}>
                        <Trash />
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default ServiceCard;

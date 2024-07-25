import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Loader2 } from "lucide-react";

const ServiceCard = ({
  bookingId,
  index,
  image,
  title,
  status,
  description,
  mail,
  selectedService,
  handleConfirm,
  handleReject,
  confirmLoading,
  rejectLoading,
}) => {
  return (
    <div className="flex mt-10">
      <Card className="w-[350px] overflow-hidden pt-5 bg-muted">
        <CardContent>
          <div className="rounded-[25px] overflow-hidden border  group shadow-custom  w-[300px]">
            <div className="relative">
              <img
                src={`data:image/png;base64,${image && image[0]?.data}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition duration-300`}
              ></div>
            </div>
          </div>

          <p className="mt-4">Title : {title}</p>
          <p>Description : {description}</p>
          <p>Mail : {mail}</p>
          <p>Status : {status}</p>
          <br />

          {selectedService !== "Past" && (
            <>
              {status.toLowerCase() === "rejected" && (
                <Button className="w-full">
                  {confirmLoading ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    "Rejected "
                  )}
                </Button>
              )}

              {status.toLowerCase() === "booked" && (
                <>
                  <Button
                    variant="destructive"
                    onClick={() => handleReject(bookingId, index)}
                  >
                    {rejectLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      "X Reject"
                    )}
                  </Button>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Button onClick={() => handleConfirm(bookingId, true)}>
                    {confirmLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      "Confirm"
                    )}
                  </Button>
                </>
              )}
              {status.toLowerCase() === "confirmed" && (
                <>
                  <Button
                    variant="destructive"
                    onClick={() => handleReject(bookingId, index)}
                  >
                    {rejectLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      "X Reject"
                    )}
                  </Button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Button>
                    {confirmLoading ? (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                      "Confirmed"
                    )}
                  </Button>
                </>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceCard;

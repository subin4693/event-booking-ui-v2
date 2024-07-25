import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";

export const ServCard = ({
  bookingId,
  index,
  title,
  image,
  description,
  mail,
  status,
  name,
  itemId,
  selectedService,
  handleConfirm,
  handleReject,
  confirmLoading,
  rejectLoading,
}) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getItem = async () => {
      try {
        const res = await axios.get(BASE_URL + "/items/" + itemId);
        // console.log(res.data);
        setItem(res.data.item);
      } catch (error) {
        console.log(error);
      }
    };
    getItem();
  }, []);

  return (
    <div className="flex mt-10">
      <Card className="w-[570px] overflow-hidden pt-5 bg-muted">
        <CardContent className="">
          <div className="flex justify-between items-center">
            <h1 className="text-center text-xl font-bold">{title}</h1>
            <div>
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
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mt-5  gap-5">
            <div className="flex-1 ">
              <div className="  bg-input rounded-[25px] overflow-hidden border  group shadow-custom">
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
              </div>
              <div className="p-3 w-[300px] object-contain break-words">
                <p className="">
                  <span className="font-semibold">Description :</span>{" "}
                  {description}
                </p>
              </div>
            </div>
            <div className="flex-1   space-y-5">
              <p>
                <span className="font-semibold">Booked by : </span>
                {name}
              </p>
              <p>
                {" "}
                <span className="font-semibold">Mail : </span>
                {mail}
              </p>
              <p>
                {" "}
                <span className="font-semibold">Name : </span>
                {item?.name}
              </p>
              <p>
                {" "}
                <span className="font-semibold">Price : </span>
                {item?.price}
              </p>
              <p>
                {" "}
                <span className="font-semibold">Status : </span>
                {status}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

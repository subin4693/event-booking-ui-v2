import React, { useState } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
    const [bookedEvents, setBookedEvents] = useState([]);
    const [itemName, setItemName] = useState("venue");
    const [event, setEvent] = useState([]);
    const { event_id } = useParams();

    const setDetails = (category) => {
        const data = bookedEvents.filter(
            (event) => event.itemId.typeId.type.toLowerCase() == category
        );
        setEvent(data);
        setItemName(category);
    };

    // useEffect(() => {
    // const getData = async () => {
    // 	try {
    // 		const data = await axios.get(BASE_URL + "/events/" + bookedId);

    // 		setBookedEvents(data.data.bookings);
    // 		const dataa = data.data.bookings.filter(
    // 			(event) =>
    // 				event.itemId.typeId.type.toLowerCase() == "venue",
    // 		);
    // 		setEvent(dataa);
    // 		setItemName("venue");
    // 	} catch (error) {
    // 		console.log(error);
    // 	}
    // };
    // getData();
    // }, []);
    return (
        <div className=" max-w-[1200px] ">
            <div className="flex gap-10">
                <button
                    onClick={() => setDetails("venue")}
                    className={`bg-input p-1 rounded hover:bg-primary hover:text-white text-center ${
                        itemName == "venue" && " bg-primary text-white "
                    }`}
                >
                    Venue
                </button>
                <button
                    onClick={() => setDetails("decoration")}
                    className={`bg-input p-1 rounded hover:bg-primary hover:text-white text-center ${
                        itemName == "decoration" && " bg-primary text-white "
                    }`}
                >
                    Decoration
                </button>
                <button
                    onClick={() => setDetails("catering")}
                    className={`bg-input p-1 rounded hover:bg-primary hover:text-white text-center ${
                        itemName == "catering" && " bg-primary text-white "
                    }`}
                >
                    Catering
                </button>
                <button
                    onClick={() => setDetails("photograph")}
                    className={`bg-input p-1 rounded hover:bg-primary hover:text-white text-center ${
                        itemName == "photography" && " bg-primary text-white "
                    }`}
                >
                    Photography
                </button>
                <button
                    onClick={() => setDetails("organizer")}
                    className={`bg-input p-1 rounded hover:bg-primary hover:text-white text-center ${
                        itemName == "organizer" && " bg-primary text-white "
                    }`}
                >
                    Organizer
                </button>
            </div>
            <div className="mt-10 flex gap-10">
                <div className="w-1/2 space-y-5">
                    <div className="bg-input rounded-[25px] p-3">
                        {console.log(event[0]?.itemId)}
                        {event[0]?.itemId?.name}
                    </div>
                    <div className="bg-input rounded-[25px] p-3">
                        {event[0]?.itemId?.description}
                    </div>
                    <div className="bg-input rounded-[25px] p-3">
                        {event[0]?.itemId?.contactInfo}
                    </div>
                    <div className="bg-input rounded-[25px] h-[300px] overflow-hidden p-3 ">
                        <img
                            src={`data:image/jpeg;base64,${event[0]?.item.images[0].data}`}
                            className="object-fit w-full h-full rounded-[15px]"
                        />
                    </div>
                    <div
                        className={` rounded-[25px] p-3 capitalize text-black ${
                            event[0]?.isConfirmed
                                ? "bg-green-300"
                                : "bg-red-300"
                        }`}
                    >
                        {event[0]?.isConfirmed ? "Confirmed" : "Booked"}
                    </div>
                </div>
                <div className="w-1/2">
                    {itemName == "venue" && (
                        <div className="bg-input rounded-[25px] p-3">
                            {" "}
                            {event[0]?.itemId?.location}
                        </div>
                    )}
                    {itemName == "catering" && (
                        <ol className="bg-input rounded-[25px] p-3">
                            {event[0]?.itemId?.menuOptions[0]
                                ?.split(",")
                                ?.map((val, index) => (
                                    <li key={val}>{index + 1 + " " + val}</li>
                                ))}
                        </ol>
                    )}
                    {itemName == "photograph" && (
                        <ol className="bg-input rounded-[25px] p-3">
                            {event[0]?.itemId?.portfolio[0]
                                ?.split(",")
                                .map((val, index) => (
                                    <li key={val}>{index + 1 + " " + val}</li>
                                ))}
                        </ol>
                    )}
                    {itemName == "decoration" && (
                        <div className="space-y-5">
                            <div className="bg-input rounded-[25px] p-3 h-[300px]">
                                <img
                                    src={`data:image/jpeg;base64,${event[0]?.item.images[1]?.data}`}
                                    className="object-fit w-full h-full rounded-[15px]"
                                />
                            </div>
                            <div className="bg-input rounded-[25px] p-3 h-[300px]">
                                <img
                                    src={`data:image/jpeg;base64,${event[0]?.item.images[2]?.data}`}
                                    className="object-fit w-full h-full rounded-[15px]"
                                />
                            </div>
                            <div className="bg-input rounded-[25px] p-3 h-[300px]">
                                <img
                                    src={`data:image/jpeg;base64,${event[0]?.item.images[3]?.data}`}
                                    className="object-fit w-full h-full rounded-[15px]"
                                />
                            </div>
                        </div>
                    )}
                    {itemName == "organizer" && (
                        <div className="bg-input rounded-[25px] p-3">
                            organizer
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventDetails;

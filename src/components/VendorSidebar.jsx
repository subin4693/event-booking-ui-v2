import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Calendar,
  DoorClosed,
  MessageCircleQuestion,
  Settings,
  User,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import { setUser } from "../features/userSlice";
import { clearItems } from "../features/itemSlice";
import { setClient } from "../features/clientSlice";

const VendorSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { client } = useSelector((state) => state.client);

  const handleSignout = () => {
    dispatch(setUser({}));
    dispatch(setClient({}));
    dispatch(clearItems());
    navigate("/");
  };
  return (
    <div className="sticky p-1 sm:p-5  md:px-10 left-0 top-0 bg-muted h-screen border z-10">
      <h1 className="font-bold text-lg sm:text-2xl">
        <span className="hidden sm:inline">Qatar </span>Event Hub
      </h1>
      <div className="h-[80vh]">
        <Link to="/vendor/register">
          <div className="flex justify-center items-center gap-2 mt-10">
            {client && client?.bestWork ? (
              <img
                src={client?.bestWork}
                className="w-14 h-14  rounded-full"
                alt=""
              />
            ) : (
              <Avatar className="w-14 h-14">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            )}
            <div className="hidden sm:inline">
              <h3 className="font-bold">{user?.name}</h3>
              <h2 className="">{user?.email}</h2>
              <h2>Role - {user?.role}</h2>
            </div>

            <br />
          </div>
        </Link>
        <div className="flex flex-col mt-8 items-center">
          <NavLink
            to="dashboard"
            className={({ isActive }) =>
              isActive
                ? "p-3 px-4 rounded-lg mt-2 flex items-center duration-200 w-fit sm:w-full  bg-background "
                : "p-3 px-4 rounded-lg mt-2 flex items-center duration-200 w-fit sm:w-full hover:bg-background "
            }
          >
            <User />
            <span className="hidden sm:inline">
              &nbsp;&nbsp; &nbsp;My profile
            </span>
          </NavLink>
          <NavLink
            to="events"
            className={({ isActive }) =>
              isActive
                ? "p-3 px-4 rounded-lg mt-2 flex items-center duration-200 w-fit sm:w-full  bg-background "
                : "p-3 px-4 rounded-lg mt-2 flex items-center duration-200 w-fit sm:w-full hover:bg-background "
            }
          >
            <Calendar />
            <span className="hidden sm:inline"> &nbsp;&nbsp; &nbsp;Events</span>
          </NavLink>
          <NavLink
            to="settings"
            className={({ isActive }) =>
              isActive
                ? "p-3 px-4 rounded-lg mt-2 flex items-center duration-200 w-fit sm:w-full  bg-background "
                : "p-3 px-4 rounded-lg mt-2 flex items-center duration-200 w-fit sm:w-full hover:bg-background "
            }
          >
            <Settings />
            <span className="hidden sm:inline">
              &nbsp;&nbsp; &nbsp;Settings
            </span>
          </NavLink>
          <NavLink
            to="help"
            className={({ isActive }) =>
              isActive
                ? "p-3 px-4 rounded-lg mt-2 flex items-center duration-200 w-fit sm:w-full  bg-background "
                : "p-3 px-4 rounded-lg mt-2 flex items-center duration-200 w-fit sm:w-full hover:bg-background "
            }
          >
            <MessageCircleQuestion />{" "}
            <span className="hidden sm:inline">
              {" "}
              &nbsp;&nbsp; &nbsp;Help & FAQs
            </span>
          </NavLink>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="hidden sm:inline" onClick={handleSignout}>
          Sign out
        </Button>
        <Button
          className="inline sm:hidden flex items-center justify-center"
          size="icon"
          onClick={handleSignout}
        >
          <DoorClosed />
        </Button>
      </div>
    </div>
  );
};

export default VendorSidebar;

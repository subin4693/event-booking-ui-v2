import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import VendorLayout from "./layouts/VendorLayout";
import CreateService from "@/page/vendor/Create-Service";
import VendorDashboard from "@/page/vendor/Dashboard";
import VendorEvents from "@/page/vendor/Events";
import Register from "@/page/vendor/Register";

import UserDashboard from "@/page/users/Dashboard";
import UserEvents from "@/page/users/Events";

import Settings from "./page/settings";

import { ThemeProvider } from "@/components/theme-provider";
import Help from "./page/help";
import RegisterCard from "./page/vendor/Register-Card";
import UserLayout from "./layouts/UserLayout";
import EventDetails from "./page/users/Event-Details";
import Profile from "./page/users/Profile";
import BookEvents from "./page/users/Book-Events";
import CreateEvents from "./page/users/Create-Events";
import Signup from "./page/auth/Signup";
import Signin from "./page/auth/Signin";
import { Toaster } from "@/components/ui/toaster";
import { useSelector } from "react-redux";

const App = () => {
    const { user } = useSelector((state) => state.user);
    const { client } = useSelector((state) => state.client);

    return (
        <div>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Toaster />
                <Router>
                    <Routes>
                        <Route path="/" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />

                        <Route
                            path="/vendor"
                            element={
                                user?.id ? (
                                    <VendorLayout />
                                ) : (
                                    <Navigate to="/" />
                                )
                            }
                        >
                            <Route path="" element={<RegisterCard />} />
                            <Route path="register" element={<Register />} />
                            <Route
                                path="dashboard"
                                element={
                                    client?._id ? (
                                        <VendorDashboard />
                                    ) : (
                                        <Navigate to="/vendor/register" />
                                    )
                                }
                            />
                            <Route
                                path="events"
                                element={
                                    client?._id ? (
                                        <VendorEvents />
                                    ) : (
                                        <Navigate to="/vendor/register" />
                                    )
                                }
                            />

                            <Route
                                path="create-services"
                                element={
                                    client?._id ? (
                                        <CreateService />
                                    ) : (
                                        <Navigate to="/vendor/register" />
                                    )
                                }
                            />
                            <Route
                                path="settings"
                                element={
                                    client?._id ? (
                                        <Settings />
                                    ) : (
                                        <Navigate to="/vendor/register" />
                                    )
                                }
                            />
                            <Route
                                path="help"
                                element={
                                    client?._id ? (
                                        <Help />
                                    ) : (
                                        <Navigate to="/vendor/register" />
                                    )
                                }
                            />
                        </Route>
                    </Routes>
                    <Routes>
                        <Route
                            path="/users"
                            element={
                                user?.id ? <UserLayout /> : <Navigate to="/" />
                            }
                        >
                            <Route path="profile" element={<Profile />} />
                            <Route
                                path="event-details/:event_id"
                                element={<EventDetails />}
                            />
                            <Route
                                path="create-event"
                                element={<CreateEvents />}
                            />
                            <Route path="events" element={<UserEvents />} />
                            <Route path="profile" element={<Profile />} />

                            <Route
                                path="book-events"
                                element={<BookEvents />}
                            />
                            <Route path="settings" element={<Settings />} />
                            <Route path="help" element={<Help />} />
                        </Route>
                    </Routes>
                </Router>
            </ThemeProvider>
        </div>
    );
};

export default App;

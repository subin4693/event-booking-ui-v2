import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const App = () => {
    return (
        <div>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Toaster />
                <Router>
                    <Routes>
                        <Route path="/" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />

                        <Route path="/vendor" element={<VendorLayout />}>
                            <Route path="" element={<RegisterCard />} />
                            <Route path="register" element={<Register />} />
                            <Route
                                path="dashboard"
                                element={<VendorDashboard />}
                            />
                            <Route path="events" element={<VendorEvents />} />

                            <Route
                                path="create-services"
                                element={<CreateService />}
                            />
                            <Route path="settings" element={<Settings />} />
                            <Route path="help" element={<Help />} />
                        </Route>
                    </Routes>
                    <Routes>
                        <Route path="/users" element={<UserLayout />}>
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

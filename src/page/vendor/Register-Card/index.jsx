import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RegisterCard = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <Card className="w-[450px] overflow-hidden pt-5 bg-muted">
                <CardContent>
                    <div className="w-full h-[200px] overflow-hidden rounded-lg mb-4">
                        <img
                            src="https://github.com/shadcn.png"
                            className="w-full h-full object-coveer"
                        />
                    </div>

                    <CardTitle>Qatar Event Hub</CardTitle>
                    <br />
                    <CardDescription className="indent-5 text-justify">
                        Qatar's population is a diverse mix of locals and
                        expatriates, with a strong emphasis on maintaining
                        cultural traditions alongside modern development. The
                        country's infrastructure is state-of-the-art, featuring
                        iconic structures like the Museum of Islamic Art and the
                        futuristic skyline of Doha.
                    </CardDescription>
                    <div className="flex items-center justify-center mt-7">
                        <Link to="register">
                            <Button>Register</Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default RegisterCard;

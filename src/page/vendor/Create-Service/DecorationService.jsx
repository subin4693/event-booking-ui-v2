import { ImageIcon } from "lucide-react";
import React, { useState } from "react";
// import { CiImageOn } from "react-icons/ci";

const DecorationService = ({ images, setImages }) => {
    const [img1, setImg1] = useState(null);
    const [img2, setImg2] = useState(null);
    const [img3, setImg3] = useState(null);

    return (
        <div className="mt-5  h-full  ">
            &nbsp;&nbsp;<label>Decoration images : </label>
            <br />
            <br />
            <div className="  bg-input rounded-[25px] h-[300px] overflow-hidden border-[2px] border-primary group">
                <label className=" h-full cursor-pointer flex items-center justify-center">
                    {img1 ? (
                        <div className="relative w-full h-full">
                            <img
                                src={URL.createObjectURL(img1)}
                                alt="image"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition duration-300"></div>
                        </div>
                    ) : (
                        // <CiImageOn />
                        <ImageIcon className="size-20 text-gray-400" />
                    )}
                    <input
                        type="file"
                        className="hidden w-full"
                        onChange={(e) => {
                            setImg1(e.target.files[0]);
                            setImages([...images, e.target.files[0]]);
                        }}
                    />
                </label>
            </div>
            <br />
            <div className="  bg-input rounded-[25px] h-[300px] overflow-hidden border-[2px] border-primary group">
                <label className="h-full cursor-pointer flex items-center justify-center">
                    {img2 ? (
                        <div className="relative w-full h-full">
                            <img
                                src={URL.createObjectURL(img2)}
                                alt="image"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition duration-300"></div>
                        </div>
                    ) : (
                        <ImageIcon className="size-20 text-gray-400" />
                    )}
                    <input
                        type="file"
                        className="hidden w-full"
                        onChange={(e) => {
                            setImg2(e.target.files[0]);
                            setImages([...images, e.target.files[0]]);
                        }}
                    />
                </label>
            </div>
            <br />
            <div className="  bg-input rounded-[25px] h-[300px] overflow-hidden border-[2px] border-primary group">
                <label className="h-full cursor-pointer flex items-center justify-center">
                    {img3 ? (
                        <div className="relative w-full h-full">
                            <img
                                src={URL.createObjectURL(img3)}
                                alt="image"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition duration-300"></div>
                        </div>
                    ) : (
                        <ImageIcon className="size-20 text-gray-400" />
                    )}
                    <input
                        type="file"
                        className="hidden w-full"
                        onChange={(e) => {
                            setImg3(e.target.files[0]);
                            setImages([...images, e.target.files[0]]);
                        }}
                    />
                </label>
            </div>
        </div>
    );
};

export default DecorationService;

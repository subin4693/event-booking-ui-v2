import { ImageIcon } from "lucide-react";
import React, { useState } from "react";
// import { CiImageOn } from "react-icons/ci";

const DecorationService = ({ images, setImages }) => {
    const [img1, setImg1] = useState(null);
    const [img2, setImg2] = useState(null);
    const [img3, setImg3] = useState(null);
    const [img4, setImg4] = useState(null);

    console.log(images);
    return (
        <div className="mt-5">
            &nbsp;&nbsp;<label>Decoration images : </label>
            <br />
            <br />
            <div className="  bg-input rounded-[25px] h-[200px] overflow-hidden border-[2px] border-primary group">
                <label className=" h-full cursor-pointer flex items-center justify-center">
                    {img1 ? (
                        <img
                            src={URL.createObjectURL(img1)}
                            className="w-full h-full object-cover group-hover:scale-95 transition-all duration-100"
                        />
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
            <div className="  bg-input rounded-[25px] h-[200px] overflow-hidden border-[2px] border-primary group">
                <label className="h-full cursor-pointer flex items-center justify-center">
                    {img2 ? (
                        <img
                            src={URL.createObjectURL(img2)}
                            className="w-full h-full object-cover group-hover:scale-95 transition-all duration-100"
                        />
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
            <div className="  bg-input rounded-[25px] h-[200px] overflow-hidden border-[2px] border-primary group">
                <label className="h-full cursor-pointer flex items-center justify-center">
                    {img3 ? (
                        <img
                            src={URL.createObjectURL(img3)}
                            className="w-full h-full object-cover group-hover:scale-95 transition-all duration-100"
                        />
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
